function converteSegundosEmHoras(eventoEmSegundos) {
  var eventoHoras = parseInt(eventoEmSegundos / 3600)
  var eventoMinutos = parseInt((eventoEmSegundos % 3600) / 60)
  var eventoSegundos = (eventoEmSegundos % 3600) % 60
  return eventoHoras + ':' + eventoMinutos + ':' + eventoSegundos
}
var eventoSegundos
eventoSegundos = window.prompt('tempo em segundo: ')
console.log(converteSegundosEmHoras(eventoSegundos))
