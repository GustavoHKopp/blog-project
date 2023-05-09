const Sequelize = require('sequelize')

const connection = new Sequelize(
    'blog-project',
    'root',
    '123456',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-3:00'
    }
)

module.exports = connection