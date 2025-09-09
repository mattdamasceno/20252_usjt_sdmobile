// Objetos Javascript (JSON)
// JavaScript Object Notation
// Uma pessoa que se chama João e tem 17 anos

// const pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa['nome'])
// console.log(pessoa['idade'])

// Uma pessoa que se chama Maria, tem 21 anos e mora na rua ABC, numero 200, bairro Vila J

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'rua ABC',
//         numero: 200,
//         bairro: 'Vila J'
//     }
// }

// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['bairro'])
// console.log(pessoa['endereco'].bairro)


// Uma concessionária que tem CNPJ e endereço (logradouro, número, bairro, cidade e estado) e um estoque de veículos. Cada veículo tem placa, marca e modelo. A concessionária pode ter, a qualquer instante, 0 ou mais veiculos

// const concessionaria = {
//     cnpj: "59.839.239/0001-10".
//         endereco = {
//         logradouro: "Rua dos bobos",
//         numero: 0,
//         bairro: {
//             nome: "Bananolândia",
//             cidade: {
//                 nome: "Itu",
//                 regiao: "Norte",
//                 numeroHabitantes: 10000,
//                 estado: {
//                     codigo: 'SP',
//                     nome: "São Paulo"
//                 }
//             },
//         },
//     },
//     veiculos: [
//         {
//             placa: "XYZ-1291",
//             marca: "Chevrolet",
//             modelo: "Ônix"
//         },
//         {
//             placa: "XYZ-1221",
//             marca: "Audi",
//             modelo: "A3"
//         },
//         {
//             placa: "XYZ-12121",
//             marca: "Nissan",
//             modelo: "Versa"
//         }
//     ]
// }

// // console.log(concessionaria.veiculos[0].placa)

// for (let veiculo of concessionaria.veiculos) {
//     if (concessionaria.veiculos.marca === "Nissan") {
//         console.log(veiculo)
//     }
// }


// Uma caculadora tem marca e modelo. Alem disso, ela sabe fazer soma e subtracao de dois numeros. A soma faz com arrow funcion sem usar return e a subtracao ela faz com funcao regular

// const calculadora = {
//     marca: "X",
//     modelo: "Y",
//     operacoes: {
//     somar: (a, b) => a + b,
//     subtrair: function subtrair (a, b) {return a - b}
//     }
// }

// console.log(calculadora.operacoes.somar(2, 3))
// console.log(calculadora.operacoes.subtrair(2, 3))

// for (let operacao of Object.keys(calculadora.operacoes)) {
//     console.log(`${operacao}: ${calculadora.operacoes[operacao](2,3)}`)
// }


// Execução Síncrona (Bloqueante)
// Execução Assíncrona (Não Bloqueante)

// console.log('Eu primeiro...')
// console.log('Eu depois...')
// console.log('Eu por último')

// CPU-Bound e IO-Bound


// function demorada() {
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()


// setTimeout(() => {
//     const d = demorada()
//     console.log(`d1: ${d}`)
// }, 10000)

// setTimeout(() => {
//     const d = demorada()
//     console.log(`d2: ${d}`)
// }, 500)


// const e = 2 + a - b
// console.log(`e: ${e}`)

// const fs = require('fs')
// const abrirArquivo = function (nomeArquivo) {
//     // callback: você define, mas não chama
//     function exibirConteudo (erro, conteudo) {
//         if (erro) {
//             console.log(`Erro: ${erro}`)
//         } else {
//             console.log(`Conteúdo: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = function (erro) {
//                 if (erro) {
//                     console.log('Deu erro tentando salvar o dobro') 
//                 } else {
//                     console.log("Salvar o dobro com sucesso")
//                 }
//                 console.log('D')
//             }
//             fs.writeFile(
//                 'dobro.txt', 
//                 dobro.toString(),
//                 finalizar
//             )
//         }
//         console.log('C')
//     }
//     fs.readFile(nomeArquivo, exibirConteudo);
//     console.log('B')
// };

// abrirArquivo("arquivo.txt");
// console.log('A')

// const calculoDemorado = (n) => {
//     const p = new Promise((resolve, reject) => {
//         let ac = 0
//         for (let i = 1; i <= n; i++) ac += i
//         resolve(ac)
//     })
//     return p
// }

// const calculoRapidinho = (n) => {
//     return Promise.resolve(n / 2 * (n + 1))
// }

// const desafio = (n) => {
//     return new Promise (function(resolve, reject) {
//         n > 0 ? resolve ((n/2) * (n + 1)) : reject("Não use valores negativos")
//     })
// }

// // const calculoRapidinho = (n) => {
// //     return new Promise ((resolve) => {resolve(n / 2 * (n + 1))})
// // }

// // devolve uma promise sempre
// const res = desafio(-10)
// res.catch((r) => {
//     console.log(`Resultado ${r}`)
// })
// .catch()

// objeto promise fica associado a uma computação demorada
// const minhaPromise = calculoDemorado(10)
// then/catch
// funções são cidadãs de primeira classe
// minhaPromise.then((res) => {
//     console.log(`Resultado: ${res}`);
// })
// console.log("Terminando...")

// const res = calculoDemorado(1000)
// console.log(res)