function hello(name = "Fulano",age){
    let msg = `hello ${name}`

    if(age != undefined){
        msg += ` ,sua idade é ${age}`
    }

    return msg
}

console.log(hello())
console.log(hello("João"))
console.log(hello("João",32))
console.log(hello(undefined,32))
console.log(hello(null,32))