"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computador_1 = require("./computador");
class Notebook extends computador_1.Computador {
    constructor(tecladoNumerico, pcMemoria, pcHd, pcProcessador) {
        super(pcMemoria, pcHd, pcProcessador);
        this.tecladoNumerico = tecladoNumerico;
    }
}
exports.Notebook = Notebook;
