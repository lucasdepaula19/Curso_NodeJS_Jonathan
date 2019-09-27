"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
class Caminhao extends veiculo_1.Veiculo {
    passarMarcha(proximaMarcha) {
        this.marchaAtual = proximaMarcha;
    }
}
exports.Caminhao = Caminhao;
