//DOM - 1 parte do codigo

const lampada = document.querySelector('#lampada')
const btLigar = document.querySelector('#ligar')
const btDesligar = document.querySelector('#apagar')

//Evento - 2 parte

btLigar.addEventListener('click',acender)
btDesligar.addEventListener('click',apagar)
lampada.addEventListener('dblclick',quebrar)

//Função - Ultima etapa do codigo

function acender(){
    lampada.src = "images/acesa.gif"
}
function apagar(){
    lampada.src = "images/apagada.gif"
}
function quebrar(){
    lampada.src = "images/quebrada.jpg"
}