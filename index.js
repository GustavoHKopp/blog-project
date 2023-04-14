const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080
const connection = require('./database/connection')
const CategoriesController = require('./categories/CategoriesController')
const ArticlesController = require('./articles/ArticlesController')
const Article = require('./articles/Article')
const Category = require('./categories/Category')

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

//index
app.get('/', (req, res) => {
    res.render('index')
})

//routes
app.use('/', CategoriesController)
app.use('/', ArticlesController)

//listen
app.listen(port, () => {
    console.log(`O servidor esta rodando no link http://localhost:${port}`)
})