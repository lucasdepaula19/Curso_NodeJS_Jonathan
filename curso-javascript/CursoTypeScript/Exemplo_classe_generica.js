"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computador_1 = require("./Exemplos_veiculos/computador");
class ListaGenerica {
    adicionar(e) { }
    remover(e) { }
    listar() {
        return [];
    }
}
exports.ListaGenerica = ListaGenerica;
//usar a lista
let listaDeNumeros = new ListaGenerica();
let listaDeComputadores = new ListaGenerica();
listaDeNumeros.adicionar(1);
listaDeNumeros.adicionar(2);
listaDeComputadores.adicionar(new computador_1.Computador());
