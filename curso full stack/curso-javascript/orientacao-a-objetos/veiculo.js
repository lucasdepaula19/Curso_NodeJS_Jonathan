module.exports = class Veiculo {
    constructor() {
        this._placa = undefined
    }

    set placa(value) {
        if (new RegExp(/^[a-z]{3}[0-9]{4}$/i).test(value)) {
            console.log(`escrevendo o valor ${value} para a placa`)
            this._placa = value
        } else {
            throw new Error("placa inválida")
        }
        
    }

    get placa() {
        console.log(`recuperando o valor ${this._placa} do veículo`)
        return this._placa
    }
}



