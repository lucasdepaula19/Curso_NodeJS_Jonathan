import { Computador } from "./computador";
import { Memoria } from "./memoria";
import { Processador } from "./processador";
import { Hd } from "./hd";
import { Desktop } from "./desktop";

let processador = new Processador("Intel","Core i7",2600)
let memoria = new Memoria("DDR4",8000);
let hd = new Hd(1000,"Samsung")

let computador = new Computador()
computador.memoria = memoria
computador.hd = hd
computador.processador = processador

console.log(computador.processador.clock)

//////////////////////////////

let computador2:Computador = {
    processador: {
        clock: 2600,
        marca: "Intel",
        modelo: "Core i7"
    },
    memoria: {
        capacidade: 8000,
        tipo: "DDR4"
    },
    hd: {
        capacidade: 1000,
        marca: "Samsung"
    }
}

let desktop: Desktop = {
    tamanhoGabinete: 9
}
