const express = require('express');
const router = express.Router();

router.get('/anillo',(req,res)=>{
    res.json({
    mensaje:"Hola mundo"
    })
})

module.exports=router