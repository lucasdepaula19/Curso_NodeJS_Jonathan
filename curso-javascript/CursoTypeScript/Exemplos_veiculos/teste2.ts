import { Desktop } from "./desktop";
import { Notebook } from "./notebook";

let pc: Desktop | Notebook = new Desktop('10');

(<any>pc).foo = "Bar"

console.log((<any>pc).foo)

if(pc instanceof Desktop){
    pc.tamanho = '12'
}