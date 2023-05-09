const sequelize = require('sequelize')
const connection = require('../database/connection')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: sequelize.STRING,
        allowNull: false 
    },
    body: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article) // uma categoria possui muitos artigos
Article.belongsTo(Category) // Um artigo pertence a uma categoria


////// Article.sync({force: true}).then(() => {})
module.exports = Article