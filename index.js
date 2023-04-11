const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080
const connection = require('./database/connection')

//View engine
app.set('view engine', 'ejs')

//static
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database
connection
    .authenticate()
    .then(() => {
        console.log('conexao realizada com sucesso!')
    })
    .catch((err) => {
        console.log(`ocorreu o segunte erro ${err}`)
    })

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(port, () => {
    console.log(`O servidor esta rodando no link http://localhost:${port}`)
})