import Pessoa from "./classes/pessoa.js";
import Carro from "./classes/carro.js";
let minhaPessoa = new Pessoa("Victor", 29);
let meuCarro = new Carro(minhaPessoa, "Vermelho", 2024, "Chevrollet","Ônix",13,"etanol")

console.log(minhaPessoa);

console.log(minhaPessoa.nome);
console.log(minhaPessoa.idade);

minhaPessoa.falar();
console.log(meuCarro.info());
meuCarro.acelerar(); 
meuCarro.acelerar(); 
meuCarro.acelerar(); 
meuCarro.freiar();
meuCarro.abastecer();
