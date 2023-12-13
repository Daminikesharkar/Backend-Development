const Sequelize = require('sequelize');
const sequelize = new Sequelize('first-scheme','root','damini@123',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;