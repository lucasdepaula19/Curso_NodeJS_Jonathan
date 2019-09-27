function hello(name = "Fulano",age) {
    let msg = `hello ${name}`

    if (age != undefined) {
        msg += ` , sua idade é ${age}`
    }

    return msg
}

console.log(hello())
console.log(hello("João"))
console.log(hello("Joao",32))
console.log(undefined, 56)

let x = null
let y = undefined

console.log(x == y)
console.log(x === y)

let obj = {
    name: "Jonathan"
}

console.log(obj.age)

console.log(0 == '0')
console.log(0 === '0')

console.log(typeof(obj))

x = 2

console.log(typeof(x))