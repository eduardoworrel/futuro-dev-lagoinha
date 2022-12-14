export default class funcionario {
    pessoa
    salario
    dataDeAdmissao
    constructor(pessoa){
        this.pessoa = pessoa
        this.salario = 10600
        this.dataDeAdmissao = new Date()
    }

    recebeAumento(valor){
        this.salario += valor
    }

    dizQuantoEuRecebo(){
        alert("O funcionadio " + this.pessoa.nome + " recebe:" 
            +this.salario )
    }
}