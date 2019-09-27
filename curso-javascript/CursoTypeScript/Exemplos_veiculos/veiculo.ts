export abstract class Veiculo <N>{

    public marchaAtual:N

    constructor(public placa?:string, public proprietario?: string){
        //this.placa = placa
    }
    
    //public placa: string
    //public proprietario: string

    public acelerar (){}
    public frear (){}
    public abstract passarMarcha (proximaMarcha:N):void
}