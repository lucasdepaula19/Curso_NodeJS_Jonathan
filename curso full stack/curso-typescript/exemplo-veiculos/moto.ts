import { Veiculo } from "./veiculo";
import { MarchaMoto } from "./marchars";
import { Carro } from "./carro";


export class Moto extends Veiculo<MarchaMoto> {
    public passarMarcha(proximaMarcha: MarchaMoto): void {
        type GrafoTransicoes = {[key: number]: number[]}
        
        let criarGrafoTransicoes = ():GrafoTransicoes => {
            transicoesPossiveis[MarchaMoto.NEUTRO] = [
                MarchaMoto.PRIMEIRA, MarchaMoto.SEGUNDA
            ]

            transicoesPossiveis[MarchaMoto.PRIMEIRA] = [
                MarchaMoto.NEUTRO
            ]

            transicoesPossiveis[MarchaMoto.SEGUNDA] = [
                MarchaMoto.NEUTRO, MarchaMoto.TERCEIRA
            ]

            transicoesPossiveis[MarchaMoto.TERCEIRA] = [
                MarchaMoto.SEGUNDA, MarchaMoto.QUARTA
            ]
            transicoesPossiveis[MarchaMoto.QUARTA] = [
                MarchaMoto.TERCEIRA, MarchaMoto.QUINTA
            ]
            transicoesPossiveis[MarchaMoto.QUINTA] = [
                MarchaMoto.QUARTA
            ]

            return transicoesPossiveis
        }

        let transicoesPossiveis: GrafoTransicoes = {}

        transicoesPossiveis = criarGrafoTransicoes()

        let transicoesPossiveisAPartirDaAtual: MarchaMoto[] =
            transicoesPossiveis[this.marchaAtual]


        if (transicoesPossiveisAPartirDaAtual.find(m => m == proximaMarcha) == undefined) {
            throw new Error(
                `impossível ir da marcha ${MarchaMoto[this.marchaAtual]} para a marcha ${MarchaMoto[proximaMarcha]}`)
        } else {
            this.marchaAtual = proximaMarcha
        }




    }


    constructor(placa: string, proprietario: string) {
        super(placa, proprietario)
        this.marchaAtual = MarchaMoto.NEUTRO
    }
}