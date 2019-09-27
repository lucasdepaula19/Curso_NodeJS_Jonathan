function sum(...nums){
    let s = 0
    
    for(let n of nums){
        s += n
    }

    return s
}

console.log(sum(1,2))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))