const express = require('express');
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
    res.json(lembrete)
})

app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})

const port = 4000
app.listen(
    port, 
    () => console.log(`Lembretes. Porta${port}.`))