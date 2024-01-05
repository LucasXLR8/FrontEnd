const n1 = document.querySelector('#uni1')
const n2 = document.querySelector('#uni2')
const n3 = document.querySelector('#uni3')

const botao = document.querySelector('#botao')

const media = document.querySelector('#media')
const resultado = document.querySelector('#resultado')

//evento
botao.addEventListener('click',calcular)

//funçao
function calcular(){

    let mediaFinal = (Number(n1.value) +Number(n2.value) +Number(n3.value))/3

    if(mediaFinal>=6){
        resultado.classList.add('aprovado')
        resultado.classList.remove('reprovado')
        resultado.textContent = "APROVADO!"
    }else{
        resultado.classList.add('reprovado')
        resultado.classList.remove('aprovado')
        resultado.textContent = "REPROVADO"
    }

    media.textContent = "Sua Media final foi: "+mediaFinal.toFixed(1)
}