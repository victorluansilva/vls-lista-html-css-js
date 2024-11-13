export class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    infoPessoa(){
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}

export class Aluno extends Pessoa{
    
    constructor(nome, idade, matricula, escola){
        super(nome, idade);
        this.matricula = matricula;
        this.escola = escola;
    }

    infoPessoa(){
        return super.infoPessoa() +  `;\n Matricula: ${this.matricula}; \n Escola: ${this.escola}`
    }

}