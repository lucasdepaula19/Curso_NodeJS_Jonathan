let cedulasDisponiveis = [20,50]

let valorDesejado = 195

cedulasDisponiveis = cedulasDisponiveis.sort((a,b) => b - a)

let valorRestante = valorDesejado

let indiceCedulaAtual = 0

let quantidadeCadaCedula = {}

try{
    while(valorRestante > 0){
        let cedulaAtual = cedulasDisponiveis[indiceCedulaAtual]
        quantidadeCadaCedula[cedulaAtual] = Math.floor(valorRestante / cedulaAtual)

        valorRestante %= cedulaAtual

        if(valorRestante > 0 && indiceCedulaAtual == cedulasDisponiveis.length - 1){
            throw new Error(`Impossível sacar R$ ${valorDesejado},00. Cédulas disponíveis: ${cedulasDisponiveis.map(c => ` R$ ${c},00`)}`)
        }

        indiceCedulaAtual++
    }

    for (let cedula in quantidadeCadaCedula){
        console.log(`${quantidadeCadaCedula[cedula]} cédulas de R$ ${cedula},00`)
    }
}catch (error) {
    console.log(error.message)
}