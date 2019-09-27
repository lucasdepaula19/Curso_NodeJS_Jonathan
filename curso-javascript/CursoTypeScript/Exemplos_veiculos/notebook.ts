import { Computador } from "./computador";
import { Processador } from "./processador";
import { Memoria } from "./memoria";
import { Hd } from "./hd";

export class Notebook extends Computador {
    
    constructor(public tecladoNumerico?: string, pcMemoria?: Memoria, pcHd?: Hd, pcProcessador?: Processador){
        super(pcMemoria, pcHd, pcProcessador)
    }

}