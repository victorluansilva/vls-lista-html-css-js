import Produto from "./Produto.js";
import Carrinho from "./Carrinho.js";

export default class LojaOnline{
    constructor(){
        this.produto = [
            new Produto('Tênis',200),
            new Produto('Camiseta',150),
            new Produto('Calça',100),
            new Produto('Bolsa',50),
            new Produto('Short',75),
            new Produto('Jaqueta',300),
        ]
        this.carrinho = new Carrinho();
    }

    listarProdutos(){
        this.produto.forEach((produto, index) => console.log(`[${index}]: ${produto.infoProduto()}\n`));
    }

    adicionarAoCarrinho(idProduto){
        this.carrinho.addProduto(this.produto[idProduto]);
    }

    removerDoCarrinho(idProduto){
        this.carrinho.removerProduto(idProduto);
    }

    totalCarrinho(){
        return this.carrinho.getTotal();
    }

    showCarrinhoInfo(){
        console.log(this.carrinho.getInfo());
    }



}