let idade_anos = parseInt(prompt('Digite sua idade em anos'))
let idade_meses = parseInt(prompt('Digite sua idade em meses'))
let idade_dias = parseInt(prompt('Digite sua idade em dias'))

let idade_ano_dias = idade_anos * 365
let idade_meses_dias = idade_meses * 30
let idade_em_dias = idade_ano_dias + idade_meses_dias + idade_dias

console.log('Sua idade em dias é ', idade_em_dias, ' dias')
