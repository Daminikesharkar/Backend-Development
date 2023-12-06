// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-projectone',
//     password: 'damini@123'
// });


// module.exports = pool.promise(); 

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-projectone','root','damini@123',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;