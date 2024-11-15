
export default class Carrinho{
    constructor(){
        this.produtos = [];
        this.total = 0;
    }
    
    getInfo(){
        return `Produtos: \n ${this.produtos.map((produto,index) => ` ${index} - ${produto.nome} | ${produto.preco}; \n`)} Total: ${this.total}`;
    }

    addProduto(produto){
        this.produtos.push(produto);
        this.total += produto.preco;
    }

    removerProduto(idProduto){
        this.produtos.splice(idProduto,1);
    }

    removeLastProduto(){
        if(this.produtos.length > 0){
            let produtoRemovido = this.produtos.pop();
            this.total -= produtoRemovido.preco;
        }
    }

    getTotal = () => this.total;
}