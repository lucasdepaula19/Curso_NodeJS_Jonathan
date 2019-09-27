const fs = require('fs')

class Resultado {
    constructor(nome,disciplina,nota,frequencia) {
        this.nome = nome
        this.disciplina = disciplina
        this.nota = nota
        this.frequencia = frequencia
    }
}



fs.readFile('./boletim.csv',{
    encoding: 'latin1'
},(erro,dados) => {
    if (erro) {
        console.log("falha ao abrir o arquivo")
        return
    }

    let linhas = dados.split("\n")

    let resultados = []

    for (let linha of linhas) {
        let linhaVetor = linha.split(";")
        resultados.push(
            new Resultado(
                linhaVetor[0], linhaVetor[1],
                Number(linhaVetor[2]), Number(linhaVetor[3])
            )
        )
    }

    resultados.pop()
    resultados.shift()

    let media = resultados.map(r => r.nota).reduce((acc,cur) => acc + cur, 0) / resultados.length

    console.log(media)
})


