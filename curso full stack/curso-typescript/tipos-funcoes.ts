let v:number[] = [3,2,1]

let x: number = 2

let identificarPar:(n:number) => boolean = n => {
    return n % 2 == 0
}

let ordenarCrescente:(a:number,b:number) => number = (x,y) => {
    return x - y
}

let ordenarDecrescente:(a:number,b:number) => number = (x,y) => {
    return y - x
}

let tipoOrdenacao: "ASC" | "DESC"



console.log(v.sort(tipoOrdenacao == "ASC" ? ordenarCrescente : ordenarDecrescente))