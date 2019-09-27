import { Computador } from "./computador";
import { Memoria } from "./memoria";
import { Hd } from "./hd";
import { Processador } from "./processador";

export class Desktop extends Computador{
    constructor(public tamanho: string, pcMemoria?: Memoria, pcHd?: Hd, pcProcessador?: Processador){
        super(pcMemoria, pcHd, pcProcessador)
    }
}