export default class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        return `Oi, eu sou o ${this.nome} e tenho ${this.idade} anos de idade.`
    }
    info(){
        return `${this.nome}, ${this.idade} anos.`
    }
} 