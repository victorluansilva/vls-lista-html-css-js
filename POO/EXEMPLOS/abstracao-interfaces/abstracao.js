
//Classes abstratas

class FormaGeometrica{
    constructor(nome){
        this.nome = nome;
    }

    calcularArea(){
        throw new Error("O método calcularArea precisa ser implementado");
    }
}


class Quadrado extends FormaGeometrica{
    
    nome = "";
    lado = 0;
    
    constructor(nome, lado){
        super(nome)
        this.lado = lado;
    }
    
    calcularArea(){
        return this.lado * this.lado;
    }
}


export {Quadrado}