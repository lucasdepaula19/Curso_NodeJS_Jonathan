"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
const marchas_1 = require("./marchas");
class Moto extends veiculo_1.Veiculo {
    constructor(placa, proprietario) {
        super(placa, proprietario);
        this.placa = placa;
        this.proprietario = proprietario;
        this.marchaAtual = marchas_1.MarchaMoto.NEUTRO;
    }
    passarMarcha(proximaMarcha) {
        let criarGrafoTransicoes = () => {
            transicoesPossiveis[marchas_1.MarchaMoto.NEUTRO] = [
                marchas_1.MarchaMoto.PRIMEIRA, marchas_1.MarchaMoto.SEGUNDA
            ];
            transicoesPossiveis[marchas_1.MarchaMoto.PRIMEIRA] = [
                marchas_1.MarchaMoto.NEUTRO
            ];
            transicoesPossiveis[marchas_1.MarchaMoto.SEGUNDA] = [
                marchas_1.MarchaMoto.PRIMEIRA, marchas_1.MarchaMoto.NEUTRO
            ];
            transicoesPossiveis[marchas_1.MarchaMoto.TERCEIRA] = [
                marchas_1.MarchaMoto.SEGUNDA, marchas_1.MarchaMoto.QUARTA
            ];
            transicoesPossiveis[marchas_1.MarchaMoto.QUARTA] = [
                marchas_1.MarchaMoto.TERCEIRA, marchas_1.MarchaMoto.QUINTA
            ];
            transicoesPossiveis[marchas_1.MarchaMoto.QUINTA] = [
                marchas_1.MarchaMoto.QUARTA
            ];
            return transicoesPossiveis;
        };
        let transicoesPossiveis = {};
        let transicoesPossiveisAPartirDaAtual = transicoesPossiveis[this.marchaAtual];
        if (transicoesPossiveisAPartirDaAtual.find(m => m == proximaMarcha) == undefined) {
            throw new Error(`impossivel ir da marcha ${marchas_1.MarchaMoto[this.marchaAtual]} para a marcha ${marchas_1.MarchaMoto[proximaMarcha]}`);
        }
        else {
            this.marchaAtual = proximaMarcha;
            console.log(`Marcha atual é: ${marchas_1.MarchaMoto[this.marchaAtual]}`);
        }
    }
}
exports.Moto = Moto;
