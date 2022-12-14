let dataAtual = new Date();
let meuAniversario = new Date(1996,05,17);
// ANO-MES-DIA

let ehVerdade = dataAtual < meuAniversario



new Date().getDate() //dia do mes (numerico) de 1 ao que o mês se limitar, ex fev :28 ou 29
new Date().getDay() //dia da semana (textual)

new Date().getMonth() // mês numerico de 0 a 11
new Date().getFullYear() // ano numerico

new Date().getHours() // hora numerico de 0 a 23
new Date().getMinutes() // minutos numerico de 0 a 59
new Date().getSeconds() // segundos numerico de 0 a 59
new Date().getMilliseconds() // segundos numerico de 0 a 59


let agora = new Date();
let ontem = new Date() // que começa como hoje
ontem.setDate(agora.getDate() - 1) // agora assume o novo valor

let aniversario = new Date(1996,05,17);
let umDiaDepois = new Date(aniversario);
umDiaDepois.setDate(umDiaDepois.getDate() + 1)


