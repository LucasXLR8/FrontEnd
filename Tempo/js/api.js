const chave = 'd7eff9023f1d294d8e046e6029aa3d20'
const nomeCidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const textoCidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const img = document.querySelector('.img-previsao')
const previsao = document.querySelector('.texto-previsao')

botao.addEventListener('click', buscarCidade)

async function buscarCidade(){
    const cidade = nomeCidade.value
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`)
    .then(resposta => resposta.json())

    textoCidade.textContent = "Tempo em " +dados.name
    temperatura.textContent = Math.ceil(dados.main.temp)+"ºC"
    previsao.textContent = dados.weather[0].description
    img.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`    

    //const dados = await res.json()
    //if(dados.cod == 404){
        //textoCidade.innerText = 'Cidade não encontrada'
    //}else{
       // textoCidade.innerText = `${dados.name}, ${dados.sys.country}`
        //temperatura.innerText = `Temperatura: ${dados.main.temp} °C`
        //img.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
        //previsao.innerText = `Previsão: ${dados.weather[0].description}`
    //}   
}