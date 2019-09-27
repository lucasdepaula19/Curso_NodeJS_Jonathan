import { Computador } from "./computador";

export class Notebook extends Computador {
    constructor(public possuiTecladoNumerico?:boolean) {
        super()
    }
}