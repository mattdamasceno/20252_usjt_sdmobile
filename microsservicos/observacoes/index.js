const express = require('express')
const app = express()

app.use(express.json())

const baseObservacoes = {
}

// POST /lembretes/1/observacoes

app.post(
    '/lembretes/:id/observacoes', (req, res) => {

    }
)


// GET

app.get(
    '/lembretes/:id/observacoes', (req, res) => {

    }
)

const port = 5000
app.listen(
    port, 
    () => console.log(`Observações. Porta ${port}.`))