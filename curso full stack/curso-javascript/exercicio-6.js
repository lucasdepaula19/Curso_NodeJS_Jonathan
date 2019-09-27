new Promise((resolve,reject) => {
    let x = 1, y = 2
    let soma = x + y

    resolve(soma)
}).then(resultado => console.log(`resultado: ${resultado}`))