//variaveis da aplication
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let sistemRandomNumber = (Math.random() * 10.0).toFixed(0)
let xTentativas = 1

//eventos
btnTry.addEventListener('click', handleClickTryClick)

btnReset.addEventListener('click', handleResetClick)

//funcão callback
function handleClickTryClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber') 
    console.log(sistemRandomNumber)
    if(Number(inputNumber.value) == sistemRandomNumber && Number(inputNumber.value) < 10 && Number(inputNumber.value) > 0){
        
        togleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xTentativas} tentativas`
    }else{
        screen1.querySelector("p").innerHTML = "aceitos somente numeros entre 0 e 10"
    }
    inputNumber.value = ""
    xTentativas++
    
}

function handleResetClick(){
    togleScreen()
    xTentativas = 1
    sistemRandomNumber = (Math.random() * 10.0).toFixed(0)
}

function togleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}