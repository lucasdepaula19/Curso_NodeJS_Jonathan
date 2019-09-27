import { Veiculo } from "./veiculo";
import { MarchaMoto } from "./marchas";

export class Moto extends Veiculo<MarchaMoto> {
    
    public passarMarcha(proximaMarcha: MarchaMoto): void {

        type GrafoTransicoes = {[key: number]: number[]}

        let criarGrafoTransicoes = ():GrafoTransicoes => {
            
            transicoesPossiveis[MarchaMoto.NEUTRO] = [
                MarchaMoto.PRIMEIRA,MarchaMoto.SEGUNDA
            ]
    
            transicoesPossiveis[MarchaMoto.PRIMEIRA] = [
                MarchaMoto.NEUTRO
            ]
    
            transicoesPossiveis[MarchaMoto.SEGUNDA] = [
                MarchaMoto.PRIMEIRA,MarchaMoto.NEUTRO
            ]
    
            transicoesPossiveis[MarchaMoto.TERCEIRA] = [
                MarchaMoto.SEGUNDA,MarchaMoto.QUARTA
            ]
    
            transicoesPossiveis[MarchaMoto.QUARTA] = [
                MarchaMoto.TERCEIRA,MarchaMoto.QUINTA
            ]
    
            transicoesPossiveis[MarchaMoto.QUINTA] = [
                MarchaMoto.QUARTA
            ]

            return transicoesPossiveis
        }

        let transicoesPossiveis:GrafoTransicoes = {}

        let transicoesPossiveisAPartirDaAtual:MarchaMoto[] = transicoesPossiveis[this.marchaAtual]

        if(transicoesPossiveisAPartirDaAtual.find(m => m == proximaMarcha) == undefined){
            throw new Error(
                `impossivel ir da marcha ${MarchaMoto[this.marchaAtual]} para a marcha ${MarchaMoto[proximaMarcha]}`
            )
        }else {
            this.marchaAtual = proximaMarcha
            console.log(`Marcha atual é: ${MarchaMoto[this.marchaAtual]}`)
        }

    }

    constructor(public placa?:string, public proprietario?: string){
        super(placa,proprietario)
        this.marchaAtual = MarchaMoto.NEUTRO
    }

}