// Instanciar objetos com o DOM
const divForms = document.getElementById('forms');
const btn = divForms.querySelector('button');

// Visualizar os elementos instanciados no console
console.log(inputs);
// Manipular o body direto pelo document:
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
// Manipular eventos

const operacoes = (a, b) => {
    return `
    <h2>Resultado das operacoes:</h2>
        <p>Soma: ${a + b}</p>
        <p>Subtracao: ${a - b} </p>
        <p>Multiplicao: ${a * b} </p>
        <p>Divisao: ${(a / b).toFixed(2)} </p>
    `
}

btn.addEventListener('click', () => {
    const inputs = divForms.querySelectorAll('input');

    //valorDigitado = input.value;
    if (divForms.getElementsByTagName('h3')[0]) {
        divForms.removeChild(divForms.getElementsByTagName('h3')[0])
    }


    const a = parseInt(inputs[0].value);
    const b = parseInt(inputs[1].value);
    const newTag = document.createElement('h3');
    newTag.innerHTML = `${operacoes(a, b)}`;
    divForms.appendChild(newTag);

})


const toogleTheme = document.getElementById('toggleTheme');

toogleTheme.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        toogleTheme.innerHTML = 'To Black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        toogleTheme.innerHTML = 'To White';
    }
})

// const olaMundo = (nome = "", message = "Olá!") =>{
//     console.log(nome, message);
// }

// olaMundo("", "Message");

const tabuada = document.getElementById('tabuada');
tabuada.addEventListener('click', () => {

})

const funcaoExemplo = () =>{
    return "exemplo"
}

const funcaoExemplo2 = nome => "Olá" + nome;