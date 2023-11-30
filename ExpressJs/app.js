
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require("./routes/admin")
const shopRouters = require('./routes/shop');
const contactRouters = require('./routes/contact');

const app =  express();

const filePath = path.join(__dirname,"views","404.html")

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));

app.use('/admin',adminRoutes);
app.use(shopRouters);
app.use(contactRouters);

app.use((req,res,next)=>{
    res.status(404).sendFile(filePath)
})

app.listen(3000);