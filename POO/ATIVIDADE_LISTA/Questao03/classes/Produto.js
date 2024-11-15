export default class Produto{

    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    infoProduto(){
        return `Nome: ${this.nome}, Preço: ${this.preco}`;
    }

}