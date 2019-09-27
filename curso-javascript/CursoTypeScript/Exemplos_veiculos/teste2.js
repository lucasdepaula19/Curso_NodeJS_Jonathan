"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const desktop_1 = require("./desktop");
let pc = new desktop_1.Desktop('10');
pc.foo = "Bar";
console.log(pc.foo);
if (pc instanceof desktop_1.Desktop) {
    pc.tamanho = '12';
}
