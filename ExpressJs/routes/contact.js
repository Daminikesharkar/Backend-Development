const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('../util/path')

router.get("/contactus",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
})

router.post("/success",(req,res,next)=>{
    console.log(req.body);
    res.send('<h1>Successfully submitted</h1>')
})

module.exports = router;