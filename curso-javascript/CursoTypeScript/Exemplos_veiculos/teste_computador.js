"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoria_1 = require("./memoria");
const hd_1 = require("./hd");
const processador_1 = require("./processador");
const desktop_1 = require("./desktop");
const notebook_1 = require("./notebook");
let memoria1 = new memoria_1.Memoria('DDR3', '4GB');
let hd1 = new hd_1.Hd('Samsung', '1TB');
let processador1 = new processador_1.Processador('Intel', 'i7', '3.2Ghz');
//console.log(`memoria1 ${JSON.stringify(memoria1)}`)
let desktop1 = new desktop_1.Desktop('grande');
let notebook1 = new notebook_1.Notebook('sim', memoria1, hd1, processador1);
// console.log(`Desktop1: ${JSON.stringify(desktop1)}`)
console.log(`Notebook1: ${JSON.stringify(notebook1)}`);
//console.log(`Notebook HD:${notebook1.pcHd.marca_hd} ${notebook1.pcHd.capacidade_hd}`)
