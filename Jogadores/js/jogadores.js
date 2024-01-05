const jogador1 = document.querySelector('#Haaland')
const jogador2 = document.querySelector('#CR7')
const jogador3 = document.querySelector('#Mbappe')
const jogador4 = document.querySelector('#Neymar')
const jogador5 = document.querySelector('#Dybala')
const jogador6 = document.querySelector('#Messi')

jogador1.addEventListener('click',Haaland)
jogador2.addEventListener('click',CR7)
jogador3.addEventListener('click',Mbappe)
jogador4.addEventListener('click',Neymar)
jogador5.addEventListener('click',Dybala)
jogador6.addEventListener('click',Messi)

function Haaland(){
    silhueta.src = "images/haaland.webp"
}
function CR7(){
    silhueta.src = "images/cr7.jpg"
}
function Mbappe(){
    silhueta.src = "images/mbappe.webp"
}
function Neymar(){
    silhueta.src = "images/neymar.webp"
}
function Dybala(){
    silhueta.src = "images/dybala.webp"
}
function Messi(){
    silhueta.src = "images/messi.jpg"
}
