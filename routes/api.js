const jwt=require('jsonwebtoken')
const express =require ('express');
const router =express.Router();
const mongoose=require('mongoose')
const user=require('../controller/users');
const login =require('../controller/login')
//const user =require('../users')
//const passport=require('../config/passport')
const passbook=require('../controller/passbook')
const transaction = require('../controller/transaction')
const key=require('../config/key')

const url=key.mongodb.dbURI;
mongoose.Promise=global.Promise;

mongoose.connect(url,function(err){
    if(err){
        console.log("Error !!!"+err);
    }
});

router.post('/login',login)
router.post('/user',user)
router.post('/transaction',transaction)
router.get('/passbook/:mobile',passbook)


module.exports = router;

