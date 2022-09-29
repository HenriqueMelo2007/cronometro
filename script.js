let decimos = 00

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
}