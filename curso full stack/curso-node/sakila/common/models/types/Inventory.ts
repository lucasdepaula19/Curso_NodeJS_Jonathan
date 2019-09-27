import { Film } from "./Film";
import { Rental } from "./Rental";

export class Inventory {
    inventoryId?:number
    film_id?:number
    film?:Film
    toJSON?:() => Inventory
    rentals?:Rental[]
}