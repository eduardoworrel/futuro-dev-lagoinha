const div = document.getElementById("quadrado")

let eixoY = 0
let eixoX = 0

const alturaLimite = window.innerHeight - div.offsetHeight
const larguraLimite = window.innerWidth - div.offsetWidth

const identificadorDoInterval = setInterval(()=>{
    if(eixoY < alturaLimite){
        eixoY += 1
        div.style.marginTop =  eixoY + "px"  
       
    }
    if(eixoY == alturaLimite && eixoX < larguraLimite){
        eixoX += 1
        div.style.marginLeft = eixoX + "px"
    }
},1)

// setTimeout(()=>{
//     clearInterval(identificadorDoInterval)
// },2000)
