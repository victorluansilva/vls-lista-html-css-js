// CLASSE DE OBJETO
class Pessoa {
    #nome;
    #idade;
    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }
    //gets e setters
    getNome = () => this.#nome;
    setNome = (nome) =>this.#nome = nome;
    getIdade = () => this.#idade;
    setIdade = (idade) => this.#idade = idade;
    // MÉTODOS
    falar = () => `Oi, eu sou o ${this.#nome} e tenho ${this.#idade} anos de idade.`
}

class StaticData {
    constructor(input , btn, data = []){
        this.input = input;
        this.btn = btn;
        this.data = data | [];
    }
    setInput = (input) =>{this.input = input};
    getInput = () =>{return this.input};
    setBtn = (btn) => { this.btn = btn};
    getBtn =  () =>{return this.btn};
    setData = (newData) => {this.data.push(newData)};
    getData = () => this.data;
}

const staticData = new StaticData();

// CONSTRUÇÃO DE COMPONENTES

const buildInput = (id = 'pessoaInput',type = 'text', placeholder = 'Fulano, 18...', visibilty = false) =>{
    const newInput = document.createElement('input')
    newInput.type = type;
    newInput.setAttribute('id',id)
    newInput.placeholder = placeholder
    newInput.disabled = visibilty;
    return newInput;
}

const buildButton = (nomeBotao = 'btn', textValue = 'Botão', onClick = ()=>{window.alert('Método precisa ser definido!')}) =>{
    const newButton = document.createElement('button');
    newButton.setAttribute('id',nomeBotao);
    newButton.innerText = textValue;
    newButton.addEventListener('click', onClick);
    return newButton;
}

// MÉTODOS DE GERAR PESSOA


const geraPessoa = () => {
    const pessoa = {
        nome: staticData.getInput().value.split(',')[0],
        idade: parseInt(staticData.getInput().value.split(',')[1])
    }
    
}

const mostraPessoa = (id, pessoa) =>{
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id',`pessoa-${id}`);
    newDiv.innerHTML = `
    <ul>
    <li>Nome: ${pessoa.nome}</li>
    <li>Idade: ${pessoa.idade} </li>
    </ul>
    `
    mainDiv.appendChild(newDiv);
}

//INICIO PROGRAMA

const mainDiv = document.getElementById('main');


window.onload = () => {
    mainDiv.innerHTML = ``
    
    const input = buildInput();
    const btn = buildButton('btnGerarPessoa','Gerar',geraPessoa);
    
    mainDiv.appendChild(input);
    mainDiv.appendChild(btn);

    staticData.setInput(document.getElementById(input.id));
    staticData.setBtn(document.getElementById(btn.id)) ;
    console.log(staticData)


};
