const express=require('express')
const router =express.Router();
const Wallet = require('../models/wallet')

module.exports=function passbook(req,res){

    //jwt.verify(req.token , 'secretkey' ,(err,authData)=>{
        Wallet.find({mobile:req.params.mobile}).exec(function(err,transaction){
            if(err){
                console.log("error while fetching your transaction Details")
            }else{
                res.json(transaction)
            }
        })
};

