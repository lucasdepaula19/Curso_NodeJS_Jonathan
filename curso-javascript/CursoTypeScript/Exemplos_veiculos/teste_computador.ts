import { Memoria } from "./memoria";
import { Hd } from "./hd";
import { Processador } from "./processador";
import { Desktop } from "./desktop";
import { Notebook } from "./notebook";

let memoria1 = new Memoria('DDR3','4GB')
let hd1 = new Hd('Samsung','1TB')
let processador1 = new Processador('Intel','i7','3.2Ghz')


//console.log(`memoria1 ${JSON.stringify(memoria1)}`)

let desktop1 = new Desktop('grande')
let notebook1 = new Notebook('sim',memoria1,hd1,processador1)

// console.log(`Desktop1: ${JSON.stringify(desktop1)}`)
 console.log(`Notebook1: ${JSON.stringify(notebook1)}`)

//console.log(`Notebook HD:${notebook1.pcHd.marca_hd} ${notebook1.pcHd.capacidade_hd}`)