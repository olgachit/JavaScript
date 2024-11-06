function sum(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    if (b===0){
        console.log('cannot be divided by zero')
    }
    return a/b
}

console.log(`The sum of values, ${sum(12,6)}`)
console.log(`The division of values, ${division(12,6)}`)
console.log(`The multiplication of values, ${multiplication(12,6)}`)
console.log(`The subtraction of values, ${subtraction(12,6)}`)