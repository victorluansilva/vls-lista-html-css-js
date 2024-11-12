import Pessoa from "./pessoa.js";

export default class Carro {
    
    constructor(dono, modelo, cor, ano, marca, consumo, tipoCombustivel) {
        this.dono = new Pessoa(dono.nome, dono.idade);
        this.cor = cor;
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
        this.consumo = consumo;
        this.tipoCombustivel = tipoCombustivel;
        this.combustivel = 0;
        this.kmRodados = 0;
        this.velocidade = 0;

    };

    info(){
        return `Carro: ${this.modelo} | ${this.ano} | ${this.marca}; \n 
        Dono: ${this.dono.info()}; \n
        Tipo de combustível: ${this.tipoCombustivel}; \n
        Consumo médio de: ${this.consumo} km/l; \n
        ` 
    }
    
    abastecer(valor){
        this.combustivel += valor;
    }

    acelerar(){
        if (this.combustivel > 0) { 
            this.velocidade++;
            this.combustivel -= this.consumo;
            //Como consumir o combustível no método acelerar?
            console.log(`O carro está acelerando a: ${this.velocidade} km/h`);
        } else {
            console.log("Combustível insuficiente para propulsão do motor.");
        }
    }

    freiar(){
        if (this.velocidade <= 0) {
            console.log(`O carro está freiando...`);
            this.velocidade = 0;
        } else {
            console.log('O carro já está parado')
        }
    }



}