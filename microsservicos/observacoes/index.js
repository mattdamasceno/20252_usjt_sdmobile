import express from 'express';
import axios from 'axios';
const app = express()
import { v4 as uuidv4 } from 'uuid'
app.use(express.json())

const baseObservacoes = {
}

// POST /lembretes/1/observacoes

app.post(
    '/lembretes/:id/observacoes', (req, res) => {
        const idObs = uuidv4()
        const { texto } = req.body
        const observacao = {
            id: idObs,
            texto,
            idLembrete: req.params.id
        }
        const observacoes = baseObservacoes[req.params.id] || []
        observacoes.push(observacao)
        baseObservacoes[req.params.id] = observacoes
        axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoCriada',
            dados: observacao
        })
        res.status(201).json(observacao)
    }
)
// GET

app.get(
    '/lembretes/:id/observacoes', (req, res) => {
        res.json(baseObservacoes[req.params.id])
    }
)

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end('ok')
})

const port = 5000
app.listen(
    port, 
    () => console.log(`Observações. Porta ${port}.`))