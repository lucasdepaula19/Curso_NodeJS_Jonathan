import * as chai from 'chai'
const expect = chai.expect
const app = require('../server/server')
import * as supertest from 'supertest'
import { Language } from '../common/models/types/Language';
import { Film } from '../common/models/types/Film';

describe("CT0004 - listar idiomas",function(){
    it("teste",async function(){
        let response = await supertest(app)
        .get(`/api/Languages`)

        expect(response.body.length).to.equal(6,response.error.message)
    })
})

describe("CT0006 - listar idiomas com filmes",function(){
    it("teste",async function(){
        let languages:Language[] = await app.models.Language.find({
            include: ['films']
        })

        console.log(JSON.stringify(languages[0].toJSON().films,null,2))
    })
})