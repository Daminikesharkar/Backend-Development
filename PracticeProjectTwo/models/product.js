const sequelize = require('../util/database')
const Sequelize = require('sequelize');

//define model
const Product = sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  title:{
    type:Sequelize.STRING,
    allowNull:false
  },
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false
  }
  });

module.exports = Product;

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products (title,price,description,imageUrl) values (?,?,?,?)',
//     [this.title,this.price,this.description,this.imageUrl])
//   }

//   static deleteById(id) {
//     return db.execute('DELETE FROM products where id = ?',[id])
//   }

//   static fetchAll() {
//     return (db.execute('Select * from products'));
//   }

//   static findById(id) {
//     return (db.execute('SELECT * from products where products.id = ?',[id]))
//   }
// };


