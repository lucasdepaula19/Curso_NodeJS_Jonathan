import { Notebook } from "./notebook";
import { Desktop } from "./desktop";

let pc: Desktop | Notebook = new Desktop(10);

(<any>pc).foo = "bar"

console.log((<any>pc).foo)



if (pc instanceof Desktop) {
    pc.tamanhoGabinete = 12
}

if (pc instanceof Notebook) {
    pc.possuiTecladoNumerico = true
}
