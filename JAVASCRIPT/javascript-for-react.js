//DECLARAÇÃO DE VARIÁVEIS

let exemplo = "tipo";
let variavel = null; 
let entrada = "valor" | null;

//DECLARAÇÃO DE VETORES E MATRIZES (ARRAYS)

let vetor = [];
vetor = ["valor1", "valor2", "valor3"];

let matriz = [[]];

matriz = [
        [1, 2, 3],
        [4, 5, 6], 
        [7, 8, 9]
    ];

console.log(matriz[0][1]);

//ESTRUTURAS DE CONTROLE

// CONDICIONAL
if (entrada === "valor") {
    console.log("Valor encontrado!");
} else if (entrada === null) {
    console.log("Variável entrada é null!");
} else {
    console.log("Valor não encontrado!");
}
// REPETIÇÃO

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let valor of vetor) {
    console.log(valor);
}

while (condition) {
    
}

do {
    
} while (condition);

//MÉTODOS

function soma(a, b) {
    return a + b;
}

console.log(soma(2, 3));

//----ARROW FUNCTIONS

const minhaFuncao = () => {
    return "Exemplo";
};

const somaArrow = (a, b) => a + b;

console.log(somaArrow(2, 3));

//CLASSES

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    showInfo() {
        console.log(`${this.nome}, ${this.idade} anos.`);
    }
}

class Usuario extends Pessoa {
    constructor(nome, idade, login, senha){
        super(nome, idade)
        this.login = login;
        this.senha = senha;
    }

    logar(){
    console.log(`Método precisa ser implementado`);
    }

    //Polimorfismo (sobrescrita de métodos)
    showInfo() {
        console.log(`${this.nome}, ${this.idade} anos; \n Login: ${this.login}`);
    }
}

// JAVASCRIPT no HTML

/* Formas de importar

<script src="./exemplo.js"></script>

 ou

<script>
    let exemplo = "";

</script>

*/

<html>
    <head>
        <script src='./exemplo.js' defer></script>// defer -> fará com que o script seja executado após o carregamento de BODY
    </head>
    <body>
        <div></div>

        <script src='./exemplo.js'></script>
    </body>
 </html>   


// type "module" -> para fazer importação e exportação de outros scripts, isto é, utilizando a programação modular do paradigma da POO


//        <script type="module" src='./teste.js'></script>

// Import e Exports


// Export default para classe ou funcação (não pode haver mais de um export default em um arquivo .js)

export default class Profesor {
    constructor(nome, idade, departamento){
        this.nome = nome;
        this.idade = idade;
        this.departamento = departamento;
    }
}

const funcao = (a,b) => a+b ;

//export default funcao;

export {funcao}

// Import -> importa objetos e métodos tendo como base a forma como são exportados

import Profesor, {funcao} from './Profesor.js';
