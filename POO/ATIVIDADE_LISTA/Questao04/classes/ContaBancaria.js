export default class ContaBancaria{
    #titular = "";
    #numeroConta = 0;
    #senha = "";
    #autenticado = false;
    #saldo = 0;
    #naoAutenticado = 'Usuário não está autenticado.'

    constructor(titular, saldo, numeroConta, senha){
        this.#titular = titular;
        this.#saldo = saldo;
        this.#numeroConta = numeroConta;
        this.#senha = senha;
    }

    autenticacao(numeroConta, senha){
        if (this.#numeroConta == numeroConta && this.#senha == senha) {
            return {
                logado: this.#autenticado = true, 
                message: `Usuário está logado e autenticado. \n Conta: ${this.#numeroConta} \n Titular: ${this.#titular}`
            };
        } else {
            return {
                logado: this.#autenticado = false, 
                message: `Conta ou senha inválidos.`
            };
        }
    }

    saldo(){
        if (this.#autenticado) {
            return `Saldo atual: ${this.#saldo}`;
        } else {
            return this.#naoAutenticado;
        }
    }

    sacar(valor){
        if (this.#autenticado && this.#saldo >= valor) {
            this.#saldo -= valor;
            return `Saque de ${valor} realizado com sucesso. Saldo atual de: ${this.#saldo}`;
        } else {
            return this.#naoAutenticado;
        }
    }

    depositar(valor){
        if (this.#autenticado) {
            this.#saldo += valor;
            return `Deposito realizado com sucesso. Novo saldo: ${this.#saldo}`;
        } else {
            return this.#naoAutenticado;
        }
    }

}