export default class Pessoa{

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`Oi eu sou ${this.nome}, tenho ${this.idade} anos de idade.`);
    }

    info(){
        return this.nome + "," + this.idade + "anos de idade";
    }
}