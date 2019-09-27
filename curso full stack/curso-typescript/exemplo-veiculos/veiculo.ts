import { MarchaCaminhao, MarchaCarro, MarchaMoto } from "./marchars";

export class Motor {
    public cilindrada:number
}

export abstract class Veiculo <M> {
    public marchaAtual:M

    constructor(public placa:string, public proprietario?:string) {
        
    }

    public motor:Motor


    public acelerar(){}
    public frear(){}
    public abstract passarMarcha(proximaMarcha:M):void
}

