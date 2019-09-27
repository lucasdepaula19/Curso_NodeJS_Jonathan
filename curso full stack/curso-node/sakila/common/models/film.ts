import { Rental } from "./types/Rental";
import { Inventory } from "./types/Inventory";
const app = require('../../server/server')
import * as moment from 'moment'

module.exports = function(Film) {
    Film.doRental = function(
        filmId:number,
        customerId:number,
        cb:(error?:any,rental?:Rental) => void) {
            new Promise(async (resolve,reject) => {
                try {
                    let availableInventory: Inventory = await getAvailableInventory(filmId)

                    if (availableInventory == null) {
                        throw new Error("Impossível alugar o filme. Não há mídia disponível")
                    }

                    let rental:Rental = await createRental(availableInventory.inventoryId,customerId)

                    resolve(rental)
                } catch (error) {
                    reject(error)
                }
            }).then(rental => cb(null,rental)).catch(error => cb(error))

        async function getAvailableInventory(filmId:number):Promise<Inventory>{
            let inventories: Inventory[] = await app.models.Inventory.find({
                where: {
                    film_id: filmId
                },
                include: [
                    {
                        relation: 'rentals',
                        scope: {
                            fields: ['returnDate'],
                            order: 'rentalId desc',
                            limit: 1
                        }
                    }
                ],
                fields: ['inventoryId']
            })

            let availableInventories = inventories.filter(i => i.toJSON().rentals.some(r => r.returnDate < new Date()))

            return availableInventories.length == 0 ? null : availableInventories[0]

        }
        async function createRental(inventoryId:number,customerId:number):Promise<Rental>{
            let rental: Rental = {
                rentalDate: new Date(),
                returnDate: moment().add(3,'days').toDate(),
                inventoryId: inventoryId,
                customer_id: customerId,
                staffId: 1
            }

            return await app.models.Rental.create(rental)
        }

    }   // fim da função doRental()

    Film.remoteMethod('doRental',{
        accepts: [
            {
                arg: 'filmId',
                type: 'number'
            },
            {
                arg: 'customerId',
                type: 'number'
            }
        ],
        returns: {
            arg: 'rental',
            type: 'object',
            root: true
        },
        http: {
            path: '/doRental/:filmId/:customerId',
            verb: 'post'
        }
    })
}