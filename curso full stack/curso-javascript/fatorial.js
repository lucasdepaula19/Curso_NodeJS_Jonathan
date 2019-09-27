function fatorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }

    let fat = 1

    for (let i = 2 ; i <= n ; i++) {
        fat *= i
    }

    return fat
}

let v = [2,3,4,5,6,7,8]

for (let n of v) {
    console.log(`o fatorial de ${n} é ${fatorial(n)}`)
}