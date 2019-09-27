const fs = require('fs')



new Promise((resolve,reject) => {
    fs.readFile('./boletim.csv',{encoding: 'latin1'},(error,data) => {
        if (error) {
            return reject(error)
        }

        resolve(data)
    })
}).then(dadosDoArquivoBoletim => {
    fs.readFile('./outroArquivo.csv',{encoding: 'latin1'},(error,data) => {
        if (error) {
            throw error
        }
        return data
    })
}).then(dadosDoOutroArquivo => {
    console.log("arquivos lidos!")
}).catch(error => {
    console.log(error)
})