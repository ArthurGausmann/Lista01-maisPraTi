// Verifique a ordem crescente
const prompt = require('prompt-sync')()

console.log('Insira dois números para rececbe-los em ordem decrescente')

let n1 = Number(prompt('Fornece um valor: '))
let n2 = Number(prompt('Forneça um valor diferente: '))

if(n1 == n2){
    console.log('Valores fornecidos inválidos')
} else if(n1 > n2){
    console.log(`${n1}, ${n2}`)
} else if(n1 < n2){
    console.log(`${n2}, ${n1}`)
}