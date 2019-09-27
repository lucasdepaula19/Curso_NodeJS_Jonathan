import { Processador } from "./processador";
import { Memoria } from "./memoria";
import { Hd } from "./hd";

export class Computador {
    constructor(public processador?:Processador,
        public memoria?:Memoria, 
        public hd?:Hd) {
            
        }
}