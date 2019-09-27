let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        let n = Math.floor(Math.random() * 2) + 1
        if (n % 2 == 0) {
            resolve()
        } else {
            reject()
        }
    },2000)
})

p.then(result => console.log("a promise resolveu!"))

p.catch(error => console.log("a promise falhou"))

console.log("foo foo")


new Promise((resolve,reject) => {
    abrirArquivo((dados) => resolve(dados))
}).then(dados => {
    return abrirArquivo1()
}).then((dadosArquivo1) => {
    return abrirArquivo2()
}).then((dadosArquivo2) => {
    return abrirArquivo3()
}).catch(error => {
    asdfasf
})