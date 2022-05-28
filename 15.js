var valor = parseInt(window.prompt('Digite seu valor'))
var taxa = parseInt(window.prompt('Digite sua taxa'))
var tempo = parseInt(window.prompt('Digite seu tempo'))
var prestacao = valor + valor * (taxa / 100) * tempo
console.log(prestacao)
