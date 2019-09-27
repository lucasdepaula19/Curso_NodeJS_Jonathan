import { Memoria } from "./memoria";
import { Hd } from "./hd";
import { Processador } from "./processador";

export class Computador{

    constructor(public pcMemoria?: Memoria, public pcHd?: Hd, public pcProcessador?: Processador){
        
    }

}