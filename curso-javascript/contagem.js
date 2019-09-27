let v = []

for(let i = 0;i<100;i++){
    v.push(Math.floor(Math.random() * 10))
}

let count = {}

for(let n of v){
    if(count[n] == undefined){
        count[n] = 1
    }else{
        count[n]++
    }
}

for(let n in count){
    console.log(`${n} aparece ${count[n]} vezes`)
}