import { Veiculo } from "./veiculo";
import { MarchaCarro } from "./marchars";

export class Carro extends Veiculo<MarchaCarro> {
    public passarMarcha(proximaMarcha: MarchaCarro): void {
        this.marchaAtual = proximaMarcha
    } 
    
    public numeroPortas:number
}