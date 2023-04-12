const sequelize = require('sequelize')
const connection = require('../database/connection')

const Article = connection.define('articles', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    body: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Article