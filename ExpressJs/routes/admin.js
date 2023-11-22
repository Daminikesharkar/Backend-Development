const express = require('express');
const router = express.Router();

router.get("/add-products",(req,res,next)=>{
    console.log("In the middleware2")
    res.send('<form action="/admin/products" method="POST"><input type="text" placeholder="name" name="title"><input type="text" placeholder="quantity" name="quantity"><button type="submit">Add Product</button></form>')
})

router.post("/products",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');    
})

module.exports = router;