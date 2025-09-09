// // // async/await
// // async function hello(nome) {
// //     return `Olá, ${nome}`
// // }

// // // async faz a função devolver um objeto Promise
// // // res vira uma promise
// // const res = hello('Matheus')
// // // execute a computação demorada associada a promise:
// // res.then(r => console.log(`Resultado: ${r}`))


// const fatorial = (n) => {
//     if (n < 0) 
//         return Promise.reject("Sem negativos")
//     if (n === 0)
//         return Promise.resolve(1)
//     let ac = 1
//     for (let i = 2; i <= n; i++)
//         ac *= 1
//     return Promise.resolve(ac)
// }

// // function chamadaComThenECatch () {
// //     const n1 = 5
// //     const n2 = -1
// //     fatorial(n1)
// //     .then(res => console.log(`Res: ${res} `))
// //     .catch(err => console.log(`Erro: ${err}`))

// //     fatorial(n2)
// //     .then(res => console.log(`Res: ${res} `))
// //     .catch(err => console.log(`Erro: ${err}`))
// // }

// // chamadaComThenECatch()

// const chamadaComAsyncAwait = async () => {
//     // n1 não será Promise, mas sim o resultado. O processamento será assíncrono anyway
//     const n1 = 5
//     const n2 = -1
//     const res1 = await fatorial(n1)
//     console.log(res1)
//     try {
//         const res2 = await fatorial(n2)
//         console.log(res2)
//     } 
//     catch (err) {
//         console.log(`Erro: ${err}`)
//     }

// }

// chamadaComAsyncAwait()


