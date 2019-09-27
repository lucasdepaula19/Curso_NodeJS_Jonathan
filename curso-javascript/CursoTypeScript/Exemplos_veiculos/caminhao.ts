import { Veiculo } from "./veiculo";
import { MarchaCaminhao } from "./marchas";

export class Caminhao extends Veiculo<MarchaCaminhao>{
    public passarMarcha(proximaMarcha: MarchaCaminhao): void {
        this.marchaAtual = proximaMarcha
    }
    
}