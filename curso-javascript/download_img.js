const superagent = require('superagent')

const fs = require('fs')

const url = 'https://jsonplaceholder.typicode.com/photos'

let fotos = []

//indice da foto sendo baixada
let i = 0

let baixarProximaFoto = () => {
    new Promise((resolve,reject) => {
        superagent.get(fotos[i].thumbnailUrl).then(response => {
            console.log(`salvando a foto ${i}`)

            fs.writeFile(`./thumbs/thumb_${i}.png`,response.body,error => {
                if(error){
                    return reject(error)
                }
                i++
                resolve()
            })
        })
    }).then(() => {
        if(i < 5){
            baixarProximaFoto()
        }else{
            console.log('Fotos baixadas com sucesso')
        }
    }).catch(error => {
        console.log(error)
    })
}

//promise que verifica existencia do diretório ./thumbs
//resolve com true ou false
new Promise((resolve,reject) => {
    fs.access('./thumbs', fs.constants.F_OK,error => {
        if(error){
            resolve(false)
        }else{
            resolve(true)
        }
    })
}).then(diretorioExiste => {
    //depois de resolver a primeira promise criamos o diretório caso necessário
    if(!diretorioExiste){
        new Promise((resolve,reject) => {
            fs.mkdir('./thumbs',error => {
                if(error){
                    return reject('Falha ao criar o diretório ./thumbs')
                }
                resolve()
            })
        })
    }else{
        return Promise.resolve()
    }
}).then(() => {
    //com o diretório criado, começamos o download
    superagent.get(url).then(response => {
        console.log(`número de fotos encontradas: ${response.body.length}`)

        fotos = response.body

        baixarProximaFoto()

    })
})