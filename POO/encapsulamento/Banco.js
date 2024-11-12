export default class Banco{
    #saldo = 0;
    constructor(saldoInicial) {
    this.#saldo = saldoInicial;
    }

    info() {
        console.log(`Saldo: ${this.#saldo}`);
    }

}

