import { Pessoa, Aluno } from "./Pessoa.js";

let victor = new Pessoa("Victor", 29);
let aluno = new Aluno("Leo", 19, 1103,"SENAI");

console.log(victor.infoPessoa());
console.log(aluno.infoPessoa());