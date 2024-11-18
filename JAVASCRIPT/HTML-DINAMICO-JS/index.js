// Instanciar objetos com o DOM
const divForms = document.getElementById('forms');

//const input = divForms.querySelector('input');

const inputs = divForms.querySelectorAll('input');

const btn = divForms.querySelector('button');

// Visualizar os elementos instanciados no console
console.log(inputs);

// Manipular o body direto pelo document:
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

// Manipular eventos

let valorDigitado = "";

btn.addEventListener('click', () => {
    //valorDigitado = input.value;

    const newTag = document.createElement('h3');
    newTag.innerHTML = `O valor de entrada é: ${inputs[0].value} e ${inputs[1].value}`;
    divForms.appendChild(newTag);

})