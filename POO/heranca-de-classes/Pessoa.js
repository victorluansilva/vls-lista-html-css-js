export class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    infoPessoa(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

export class Aluno extends Pessoa{
    
    constructor(nome, idade, matricula, escola){
        super(nome, idade);
        this.matricula = matricula;
        this.escola = escola;
    }

}