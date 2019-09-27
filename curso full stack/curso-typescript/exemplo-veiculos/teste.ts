import { Carro } from "./carro";
import { Moto } from "./moto";
import { Caminhao } from "./caminhao";
import { Veiculo, Motor } from "./veiculo";
import { MarchaCarro, MarchaMoto } from "./marchars";


let moto = new Moto("abc1234","joao")

moto.passarMarcha(MarchaMoto.PRIMEIRA)