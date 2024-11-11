import Pessoa from "./pessoa.js";

export default class Carro {
    constructor(dono, cor, ano, marca, modelo, consumo, combustivel) {
        this.dono = new Pessoa(dono.nome, dono.idade);
        this.cor = cor;
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
        this.consumo = consumo;
        this.combustivel = combustivel;
    };

    info(){
        return `Carro: ${this.modelo} | ${this.ano} | ${this.marca}; \n 
        Dono: ${this.dono.info()}; \n
        Tipo de combustível: ${this.combustivel}; \n
        Consumo médio de: ${this.consumo}; \n
        ` 
    }



}