function sum(a,b,...nums) {
    let s = a + b
    for (let n of nums) {
        s += n
    }

    return s
}

let y = sum

console.log(sum(1,2))
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))
console.log(y(9,8))