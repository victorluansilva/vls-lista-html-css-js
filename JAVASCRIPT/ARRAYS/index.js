let grupos = [];
let nomes = ["Cauã", "Dayane", "Leo Stronda", "Japoneso", "Renato", "Jhony Due", "Igor igo igo", "Guinaldo", "Gordão", "Carlão"];


const textArea = document.getElementById('nomesIn');
textArea.value = nomes.join(', \n');

const qtdGrupos = document.getElementById('qtdGrupos');
qtdGrupos.value = 2;
const btnGerar = document.getElementById('btnGerar');
const divResultado = document.getElementById('resultado');

const grupoNomes = (id, grupo) => {
    const liUlNomes = () =>{
        let list = ``
        grupo.forEach(nome => {
            list += `<li>${nome}</li>`
        })
        return list;
    }

    return `<div id='gp-${id}' class="grupoNomes">
                <h2>Grupo ${(id+1)}</h2>
                <hr>
                <ul>
                    ${liUlNomes()}
                </ul>
            </div>
        `
}

btnGerar.addEventListener('click', () => {
    let saidaFinal = ``;

    grupos.forEach((grupo,index) =>{
        saidaFinal += grupoNomes(index, grupo);
    });

    divResultado.innerHTML = saidaFinal;

});