require('dotenv').config()
const axios = require('axios')

const {
    APPID,
    PROTOCOL,
    BASE_URL,
    Q,
    CNT,
    UNITS,
    IDIOM: LANG
} = process.env

// Interpolação = colocar entre

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&cnt=${CNT}&units=${UNITS}&lang=${LANG}`

async function comAsyncAwait() {
    try {
        const result = await axios.get(url) // só faz sentido ser await se o que vier em seguida for promise
        const res = result.data.list
        console.log(res)
        for (let previsao of res) {
            console.log(`dt: ${new Date(previsao.dt * 1000).toLocaleString()}`)
            console.log(`Sensação térmica: ${previsao.main.feels_like}`)
            console.log(`Nível do mar: ${previsao.main.sea_level}`)
        }
    } catch (e) {
        console.log(e)
    }

}

comAsyncAwait()



// const teste = () => {
//     return 1
// }

// console.log(teste()) // promise, que retorna o número que pode ser chamado depois

// axios.get(url)
//     .then((res) => { // sem parentêses, pois apenas um parâmetro foi passado - res é uma declaração
//         console.log('Exibindo o corpo da resposta...')
//         console.log(res.data)
//         console.log("*******************************")
//         return res.data.list
//     })
//     .then((res) => {
//         console.log('Exibindo a lista inteira')
//         console.log(res)
//         console.log("*******************************")
//         return res
//     })
//     .then((res) => {
//         console.log('Iterando sobre a lista')
//         for (let previsao of res) {
//             console.log(`dt: ${new Date(previsao.dt * 1000).toLocaleString()}`)
//             console.log(`Temp min: ${previsao.main.temp_min}`)
//             console.log(`Description: ${previsao.weather[0].description}`)

//         }
//     })