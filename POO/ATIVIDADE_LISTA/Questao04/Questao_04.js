import ContaBancaria from "./classes/ContaBancaria.js";

const conta1 = new ContaBancaria('Victor',10000,321, '#s3nh4');

console.log("Logando na conta...");
console.log(conta1.autenticacao(321,'#s3nh4').message);
console.log('Verificar saldo:\n', conta1.saldo());
console.log('Realizar saque de 100 reais:\n', conta1.sacar(100));
console.log('Depositar 200 reais:\n', conta1.depositar(200));
