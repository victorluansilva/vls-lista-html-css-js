import { Pessoa, Aluno } from "./Pessoa.js";

let victor = new Pessoa("Victor", 29);

console.log(victor.infoPessoa());

let aluno = new Aluno("Leo", 25, 1103,"SENAI");

console.log(aluno.infoPessoa());