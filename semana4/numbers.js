export class calculadora {
	soma(numeros){
    	let total = 0
        let start = 0 //primeiro elemento de um array []
        let ultimoElemento = numeros.length - 1
        while(start <= ultimoElemento){
        	total += numeros[start]
          	start += 1; //para que saia do while quando start chegar no ultimo elemento
          
        }
      return total
    }
}