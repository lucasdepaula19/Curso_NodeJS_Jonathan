import { Computador } from "./computador";
import { Processador } from "./processador";
import { Memoria } from "./memoria";
import { Hd } from "./hd";

export class Desktop extends Computador {
    constructor(public tamanhoGabinete:number,
        processador?:Processador,
        memoria?:Memoria, 
        hd?:Hd) {
        super(processador,memoria,hd)
    }
}