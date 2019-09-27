import { Veiculo } from "./veiculo";
import { MarchaCaminhao } from "./marchars";
import { Carro } from "./carro";

export class Caminhao extends Veiculo<MarchaCaminhao>{
    public passarMarcha(proximaMarcha: MarchaCaminhao): void {
        this.marchaAtual = proximaMarcha
    }
}
