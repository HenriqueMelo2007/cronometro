// Variáveis das unidades de tempo do cronometro
let decimos = 0
let segundos = 0
let minutos = 0
let horas = 0

// intervalo
let interval

// botão "começar" e evento de click
const comecar = document.querySelector('#btn-comecar')
comecar.addEventListener('click', comecarCounter)

// função que define o intervalo do contador
function comecarCounter () {
  interval = setInterval(counterDecimosNN, 100)
}

// função que faz a contagem
function counterDecimosNN () {
  decimos++

  // trazendo o HTML para o script e atribuindo a variável de tempo que será incrementada
  document.querySelector('#number-decimos').innerHTML = decimos
  document.querySelector('#number-segundos').innerHTML = segundos
  document.querySelector('#number-minutos').innerHTML = minutos
  document.querySelector('#number-horas').innerHTML = horas

  // contagem
  if (decimos == 10) {
    decimos = 0
    segundos++
  }

  if (segundos == 60) {
    segundos = 0
    minutos++
  }

  if (minutos == 60) {
    minutos = 0
    horas++
  }

  // organizção visual do HTML
  if (decimos < 10) {
    document.querySelector('#number-decimos').innerHTML = `0${decimos}`
  }

  if (segundos < 10) {
    document.querySelector('#number-segundos').innerHTML = `0${segundos}`
  }

  if (minutos < 10) {
    document.querySelector('#number-minutos').innerHTML = `0${minutos}`
  }

  if (horas < 10) {
    document.querySelector('#number-horas').innerHTML = `0${horas}`
  }
}

// botão "pausar" e evento de click
const pausar = document.querySelector('#btn-pausar')
pausar.addEventListener('click', pausarCounter)

// função que faz a pausa
function pausarCounter () {
  clearInterval(interval)
}

// botão "zerar" e evento de click
const zerar = document.querySelector('#btn-zerar')
zerar.addEventListener('click', zerarCounter)

// função que zera o cronômetro
function zerarCounter () {
  clearInterval(interval)
  decimos = 0
  segundos = 0
  minutos = 0
  horas = 0

  document.querySelector('#number-decimos').innerHTML = `0${decimos}`
  document.querySelector('#number-segundos').innerHTML = `0${segundos}`
  document.querySelector('#number-minutos').innerHTML = `0${minutos}`
  document.querySelector('#number-horas').innerHTML = `0${horas}`
}