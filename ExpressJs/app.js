
const express = require('express');
const bodyParser = require('body-parser');

const app =  express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-products",(req,res,next)=>{
    console.log("In the middleware2")
    res.send('<form action="/products" method="POST"><input type="text" placeholder="name" name="title"><input type="text" placeholder="quantity" name="quantity"><button type="submit">Add Product</button></form>')
})

app.use("/products",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');    
})

app.use("/",(req,res,next)=>{
    console.log("In the middleware2")
    res.send('<h1>Hello from express</h1>')
})

app.listen(3000);