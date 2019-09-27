import {Carro} from "./carros"
import { Moto } from "./moto";
import { Caminhao } from "./caminhao";
import { MarchaMoto } from "./marchas";

// let carro1 = new Carro()
// let moto1 = new Moto('dd9d9d99s99s')
// let caminhao1 = new Caminhao()

// carro1.placa = "3k3k3k3k3k"
// caminhao1.placa = "fd7d7f7f7"

// console.log(`a placa do carro é: ${carro1.placa}`)

let moto2 = new Moto("moto doida","joao")

moto2.passarMarcha(MarchaMoto.PRIMEIRA)