const video = document.querySelector('#vid')
const start = document.querySelector('#play')
const stop = document.querySelector('#stop')
const acelerar = document.querySelector('#acelerar')
const retroceder = document.querySelector('#retroceder')
const parar = document.querySelector('#pause')
const av10 = document.querySelector('#av10')
const re10 = document.querySelector('#re10')

//eventos

start.addEventListener('click',comecar)
stop.addEventListener('click',pare)
parar.addEventListener('click',espere)
acelerar.addEventListener('click',adiantar)
retroceder.addEventListener('click',desacelerar)
av10.addEventListener('click',a10s)
re10.addEventListener('click',r10s)

//funçoes

function comecar(){
    video.play()
    video.playbackRate = 1
}
function pare(){
    video.pause()
    video.currentTime = 0
}
function espere(){
    video.pause()
}
function adiantar(){
    video.playbackRate += 0.1
}
function desacelerar(){
    video.playbackRate -= 0.1
}
function a10s(){
    video.currentTime += 10
}
function r10s(){
    video.currentTime -= 10
}