import Pessoa from "./Pessoa.js";
export default class Carro {
    constructor(dono, modelo, cor, ano, marca, consumo, tipoCombustivel, capacidadeCombustivel) {
        this.dono = new Pessoa(dono.nome, dono.idade);
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.marca = marca;
        this.consumo = consumo;
        this.tipoCombustivel = tipoCombustivel;
        this.capacidadeCombustivel = capacidadeCombustivel;
        this.qtdCombustivel = capacidadeCombustivel;
        this.kmRodados = 0;
        this.velocidade = 40;
    }

    info() {
        let txtInfo = "Informações do carro \n"
        txtInfo += `Carro ${this.modelo}/${this.marca} | ano ${this.ano} | ${this.cor} \n`
        txtInfo += `Dono: ${this.dono.info()} \n`
        txtInfo += `Tipo de combustível: ${this.tipoCombustivel} \n`
        txtInfo += `Capacidade do tanque: ${this.capacidadeCombustivel} \n`
        txtInfo += `Km/l: ${this.consumo} \n`
        txtInfo += `Km rodados: ${this.kmRodados} \n`

        console.log(txtInfo, `\n`);
    }

    acelerar(tempo) {
        const calcConsumo = (km, consMedio) => km / consMedio;
       /*
       Equivalente a:
       const calcConsumo = (km, consMedio) => {
            return km / consMedio;
        }
       
       */ 
        // Método recursivo para aceleração
        const aceleracaoRecursiva = (tempoRestante) => {
            if (this.qtdCombustivel <= 0 || tempoRestante <= 0) {
                if (this.qtdCombustivel <= 0) {
                    this.qtdCombustivel = 0; 
                    console.log("O carro ficou sem combustível!");
                }
                return;
            }
    
            this.velocidade += 1;
            this.kmRodados += ((this.velocidade/10) * 2);
            this.qtdCombustivel -= calcConsumo(this.kmRodados, this.consumo);
    
    
            console.log(`Tempo restante: ${tempoRestante - 1}h`);
            console.log(`Velocidade: ${this.velocidade} km/h`);
            console.log(`Distância percorrida: ${this.kmRodados} km`);
            console.log(`Combustível restante: ${this.qtdCombustivel.toFixed(2)} litros`);
    
            aceleracaoRecursiva(tempoRestante - 1);
        };
    
        if (this.qtdCombustivel > 0 && tempo > 0) {
            aceleracaoRecursiva(tempo);
        } else {
            console.log("Sem combustível ou tempo inválido para acelerar!");
        }
        console.log(`\n`)
    }
    

    freiar(){
        const desacelerar = (velocidade) =>{
            if(velocidade <= 0 ){
                this.velocidade = 0;
                console.log(`Velocidade atual: ${this.velocidade} km/h (carro parado!)` )
                return 0;
            } else {
                console.log(`Velocidade atual: ${velocidade} km/h` )                
                this.velocidade = velocidade - 1;
                return velocidade - desacelerar(velocidade - 1)
            }
        }
        console.log("Carro freiando...")
        this.velocidade = desacelerar(this.velocidade);
    }


}