let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        let n = Math.floor(Math.random() * 2) + 1
        if(n % 2 == 0) {
            resolve()
        }else{
            reject
        }
    },2000)
})

p.then(result => console.log("a promise resolveu!"))

p.catch(error => console.log("a promise falhou!"))