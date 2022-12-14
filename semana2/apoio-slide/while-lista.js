const list = [1,2,3,4,5,6]
const divisiveisPor2 = []

let index = 0 //começa no primeiro indice
let quantidadeDeItens = list.length - 1
// pega o ultimo index possível
// como começa em 0 o ultimo é a quantidade
// de itens menos 1

while(index <= quantidadeDeItens){
    if(list[index] % 2 == 0){
        divisiveisPor2.push(list[index])
    }
    index += 1;
}

// list : [1,2,3,4,5,6]
// divisiveisPor2 : [2,4,6]
