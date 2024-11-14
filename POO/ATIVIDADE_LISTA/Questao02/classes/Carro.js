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
        this.velocidade = 0;
    }

    info() {
        let txtInfo = "Informações do carro \n"
        txtInfo += `Carro ${this.modelo}/${this.marca} | ano ${this.ano} | ${this.cor} \n`
        txtInfo += `Dono: ${this.dono.info()} \n`
        txtInfo += `Tipo de combustível: ${this.tipoCombustivel} \n`
        txtInfo += `Capacidade do tanque: ${this.capacidadeCombustivel} \n`
        txtInfo += `Km/l: ${this.consumo} \n`
        txtInfo += `Km rodados: ${this.kmRodados} \n`

        console.log(txtInfo);
    }

    acelerar(tempo) {
        let txtInfo = "Info da aceleração:\n"

        const calcConsumo = (km, consMedio) => {
            return (km / consMedio);
        }

        if (this.qtdCombustivel > 0 && tempo > 0) {
            let cont = 0
            while (cont < tempo && this.qtdCombustivel > 0) {
                this.velocidade+= 5;
                this.kmRodados += 10;
                this.qtdCombustivel -= calcConsumo(this.kmRodados, this.consumo);
                cont++
            }
            if (this.qtdCombustivel <= 0) {
                this.qtdCombustivel = 0
                txtInfo = 'O carro ficou sem combutível!'

            } else {
                txtInfo += `O carro acelerou por ${tempo} hs \n`
                txtInfo += `Velocidade atual de: ${this.velocidade} km/h \n`;
                txtInfo += `Distância percorrida: ${this.kmRodados} km \n`;    
                txtInfo += `${this.qtdCombustivel}l de combustível restante. \n`;
            }

            console.log(txtInfo)
        } else {
            console.log('Sem combutível!')
        }
    }

    freiar(){
        const desacelerar = (velocidade) =>{
            if(velocidade <= 0 ){
                return 0
            } else {
                return velocidade - this.freiar(velocidade - 1)
            }
        }

        console.log(`Carro freiando...\n ${desacelerar(this.velocidade)}`);
    }


}