import * as chai from 'chai'
const expect = chai.expect
const app = require('../server/server')
import * as supertest from 'supertest'
import { Film } from '../common/models/types/Film';
import { Language } from '../common/models/types/Language';

describe('testes sobre filmes',function(){
    describe("CT0001 - listar todos os filmes", function() {
        before("rotina antes do teste",function(){
            console.log("executando rotina antes do teste...")
        })

        it("teste",async function(){
            let response = await supertest(app)
            .get(`/api/Films`)
            
            expect(response.body.length).to.equal(1000,'espera-se que existam 1000 filmes no banco')

            let films: Film[] = response.body
            
            
        })

        after("rotina depois do teste",function(){
            console.log("executando rotina depois do teste")
        })
    })  //fim do CT0001

    describe("CT0002 - cadastrar novo filme",function(){
        it("teste",async function(){
            let film:Film = {
                title: "filme teste"
            }

            let response = await supertest(app)
            .post(`/api/Films`)
            .send(film)

            expect(response.status).to.equal(200,response.error.message)
            expect(response.body.filmId).to.exist
        })
    })  // fim do CT0002

    describe("CT0003 - consultar filmes usando filtros",function(){
        it("buscar filme por título usando o método findOne()",async function(){
            // buscar um filme por título
            let title = "ACADEMY DINOSAUR"
            let film: Film = await app.models.Film.findOne({
                where: {
                    title: title
                }
            })

            console.log(`filme encontrado: ${film != null ? 'sim' : 'não'}`)
            expect(film).to.exist
            expect(film.filmId).to.exist
        })

        it("buscar filme por título usando a API /api/Films/findOne",async function(){
            // buscar um filme por título
            let title = "ACADEMY DINOSAUR"
            let response = await supertest(app)
            .get(`/api/Films/findOne?filter=${JSON.stringify({
                where: {
                    title: title
                }
            })}`)

            let film: Film = response.body
            console.log(`filme encontrado: ${film != null ? 'sim' : 'não'}`)
            expect(film).to.exist
            expect(film.filmId).to.exist
        })

        it("buscar por custo de substituição e classificação",async function(){
            // buscar os filmes que estejam na classificação R, G ou PG
            // e que o custo de substituição seja superior a 15,00
            let films:Film[] = await app.models.Film.find({
                where: {
                    and: [
                        {rating: {inq: ['R','G','PG']}},
                        {replacementCost: {gt: 15}}
                    ]
                }
            })
            console.log(`número de filmes encontrados: ${films.length}`)
        })
    })

    describe("CT0005 - buscar filmes com os idiomas",function(){
        it("teste",async function(){
            let films: Film[] = await app.models.Film.find({
                include: ['language']
            })

            // let languages: Language[] = films.map(f => f.language)

            // languages.forEach(l => console.log(l.name))

            console.log(JSON.stringify(films[0]))
        })
    })

})