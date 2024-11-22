// VANILLA JAVASCRIPT WEB SITE

// CLASSE DE OBJETO
class Pessoa {
    #nome;
    #idade;
    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }
    //getters e setters
    getNome = () => this.#nome;
    setNome = (nome) => this.#nome = nome;
    getIdade = () => this.#idade;
    setIdade = (idade) => this.#idade = idade;
    // MÉTODOS
    falar = () => `Oi, eu sou o ${this.#nome} e tenho ${this.#idade} anos de idade.`
}

class StaticData {
    constructor() {
        this.input = null;
        this.btn = null;
        this.list = null;
        this.data = [];

    }
    setInput = (input) => { this.input = input };
    getInput = () => { return this.input };
    setBtn = (btn) => { this.btn = btn };
    getBtn = () => { return this.btn };
    setData = (newData) => { this.data.push(newData) };
    getData = () => this.data;
    // filterData = busca => { return busca}
    setList = (newList) => { this.list = newList };
    getList = () => this.list;
}

// DECLARAÇÃO DE VARIÁVEIS

const staticData = new StaticData();
const mainDiv = document.getElementById('main');

// CONSTRUÇÃO DE COMPONENTES
const buildInput = (id = 'pessoaInput', type = 'text', placeholder = 'Fulano, 18...', disabled = false) => {
    const newInput = document.createElement('input')
    newInput.type = type;
    newInput.value = null;
    newInput.setAttribute('id', id)
    newInput.placeholder = placeholder
    newInput.disabled = disabled;
    return newInput;
}

const buildButton = (nomeBotao = 'btn', textValue = 'Botão', onClick  = () => { window.alert('Método precisa ser definido!') }) => {
    const newButton = document.createElement('button');
    newButton.setAttribute('id', nomeBotao);
    newButton.innerText = textValue;
    newButton.addEventListener('click', onClick);
    return newButton;
}

const buildSearcherComponent = (searcher = () => { window.alert('Método precisa ser definido!') }) => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id','searcher');
    newDiv.appendChild(buildInput('searchInpu', 'text','Digit sua pesquisa...' ));
    newDiv.appendChild(buildButton('btnSearch', 'Buscar', searcher));

    return newDiv;

}

const buildListPessoasDiv = () => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'listPessoas');
    return newDiv;
}

// MÉTODOS DE GERAR PESSOA
const geraPessoa = () => {

    // MÉTODO PARA LISTAR PESSOAS
    const listarPessoas = (pessoas = []) => {
        staticData.getList().innerHTML = `<h2>Lista de Pessoas</h2>`;
        const mostraPessoa = (id, pessoa) => {
            //const listPessoas = document.getElementById()
            const newDiv = document.createElement('div');
            newDiv.setAttribute('id', `pessoa-${id}`);
            newDiv.innerHTML = `
        <ul>
        <li>Nome: ${pessoa.nome}</li>
        <li>Idade: ${pessoa.idade} </li>
        </ul>
        `
            return newDiv;
        }
        pessoas.forEach((pessoa, id) => {
            const newDiv = mostraPessoa(id, pessoa);
            staticData.getList().appendChild(newDiv);
        })

    }

    //  ADICIONAR NOVOS DADOS
    try {
        //TESTE PARA VALIDAR ENTRADAS
        if (staticData.getInput().value.length <= 0) {
            throw 'Campo vazio, tente novamente!'
        } else if (staticData.getInput().value.split(',').length <= 1) {
            throw 'Digite a idade!'
        }
        const inputNome = staticData.getInput().value.split(',')[0].trim();
        const inputIdade = parseInt(staticData.getInput().value.split(',')[1].trim());

        const pessoa = {
            nome: inputNome,
            idade: inputIdade
        }

        staticData.setData(pessoa);
        console.log(staticData.getData());

        window.alert(`Pessoa adicionada com sucesso!`)

        listarPessoas(staticData.getData())
        buildSearcherComponent()

    } catch (error) {
        //LANÇA A MENSAGEM DE ERRO NO ALERT
        alert(error)
    }

}

//INICIO PROGRAMA



window.onload = () => {
    mainDiv.innerHTML = ``

    const input = buildInput();
    const btn = buildButton('btnGerarPessoa', 'Gerar', geraPessoa);

    mainDiv.appendChild(input);
    mainDiv.appendChild(btn);
    mainDiv.appendChild(buildListPessoasDiv());

    staticData.setInput(document.getElementById(input.id));
    staticData.setBtn(document.getElementById(btn.id));
    staticData.setList(document.getElementById('listPessoas'));
    console.log(staticData)

};
