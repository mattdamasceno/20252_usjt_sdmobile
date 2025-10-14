import axios from 'axios';
import express from 'express';
const app = express();

app.use(express.json())

const baseLembretes = {
}

let id = 1
app.post('/lembretes', (req, res) => {
    const { texto } = req.body
    const lembrete = {id, texto}
    baseLembretes[id] = lembrete
    id++
    axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: lembrete // interface do evento
    })
    res.json(lembrete)
})

app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end('ok')
})

const port = 4000
app.listen(
    port, 
    () => console.log(`Lembretes. Porta ${port}.`))