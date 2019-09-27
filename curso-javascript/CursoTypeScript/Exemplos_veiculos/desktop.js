"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computador_1 = require("./computador");
class Desktop extends computador_1.Computador {
    constructor(tamanho, pcMemoria, pcHd, pcProcessador) {
        super(pcMemoria, pcHd, pcProcessador);
        this.tamanho = tamanho;
    }
}
exports.Desktop = Desktop;
