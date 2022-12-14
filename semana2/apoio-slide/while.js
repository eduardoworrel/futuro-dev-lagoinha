let nomePendente = true
while(nomePendente){
    nome = prompt("qual seu nome?")
    if(nome.length < 3){
        alert("nome invalido")
    }else{
        nomePendente = true
    }
}
alert("bem vindo " + nome)

