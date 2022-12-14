const horaElemento = document.getElementById("hora")
const minutoElemento = document.getElementById("minuto")
const segundoElemento = document.getElementById("segundo")

let hora = 0
let minuto = 0
let segundo = 0

setInterval(()=>{
    segundo += 1
    if(segundo <= 9){
        segundoElemento.innerText = "0" + segundo
    }else{
        segundoElemento.innerText = segundo
    }

    if(segundo > 59){
        minuto += 1
        segundo = 0

        if(minuto <= 9){
            minutoElemento.innerText = "0" + minuto
        }else{
            minutoElemento.innerText = minuto
        }   
    }
    
    if(minuto > 59){
        hora += 1
        minuto = 0

        if(hora <= 9){
            horaElemento.innerText = "0" + hora
        }else{
            horaElemento.innerText = hora
        }   
    }

    if(hora > 23){
        
    }
},1000)