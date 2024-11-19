let grupos = [];
let nomes = ["Cauã", "Dayane", "Leo Stronda", "Japoneso", "Renato", "Jhony Due", "Igor igo igo"];

grupos.push(nomes)
grupos.push(nomes)
grupos.push(nomes)


const grupoNomes = (id, grupo) => {
    const liUlNomes = () =>{
        let list = ``
        grupo.forEach(nome => {
            list += `<li>${nome}</li>`
        })
        return list;
    }

    return `<div id='${id}' class="grupoNomes">
                <h2>Grupo ${(id+1)}</h2>
                <hr>
                <ul>
                    ${liUlNomes()}
                </ul>
            </div>
        `
}


console.log(grupos);


const btnGerar = document.getElementById('btnGerar');
const divResultado = document.getElementById('resultado');

btnGerar.addEventListener('click', () => {
    let saidaFinal = ``;
    grupos.forEach((grupo,index) =>{
        saidaFinal += grupoNomes(index, grupo);
    });

    divResultado.innerHTML = saidaFinal;

});