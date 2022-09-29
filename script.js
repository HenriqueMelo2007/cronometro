let decimos = 0
let segundos = 0
let minutos = 0
let horas = 0

const comecar = document.querySelector('#btn-comecar')
const parar = document.querySelector('#btn-parar')
const zerar = document.querySelector('#btn-zerar')

comecar.addEventListener('click', comecarCC)

function comecarCC () {
  setInterval(counterDecimosNN, 100)
}

function counterDecimosNN () {
  decimos++

  document.querySelector('#number-decimos').innerHTML = decimos
  document.querySelector('#number-segundos').innerHTML = segundos
  document.querySelector('#number-minutos').innerHTML = minutos
  document.querySelector('#number-horas').innerHTML = horas

  if (decimos == 10) {
    decimos = 0
    segundos++
  }

  if (decimos < 10) {
    document.querySelector('#number-decimos').innerHTML = `0${decimos}`
  }

  if (segundos == 60) {
    segundos = 0
    minutos++
  }

  if (segundos < 10) {
    document.querySelector('#number-segundos').innerHTML = `0${segundos}`
  }

  if (minutos == 60) {
    minutos = 0
    horas++
  }

  if (minutos < 10) {
    document.querySelector('#number-minutos').innerHTML = `0${minutos}`
  }

  if (horas < 10) {
    document.querySelector('#number-horas').innerHTML = `0${horas}`
  }
}