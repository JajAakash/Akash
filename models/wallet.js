const mongoose=require('mongoose')

const Schema=mongoose.Schema;
const User = require('../models/user');

const walletSchema=new Schema({
    creditedAmount:{type:Number, required:false},
    withdrawAMount:{type:Number, required:false},
    totalAmount:{type:Number, required:false},
    comission:{type:Number,required:false},
    charge:{type:Number,required:false},
    type:{type:String,require:true},
    //id:{type:String, required:true},
    mobile:{type:Number},
    transactiontime:{type:Date, required:true},
    // accountholder:{
    //     type:Schema.Types.ObjectId,
    //     ref:"User"
    // }
});

  // userSchema.methods.generateJwt = function() {
  //   var expiry = new Date();
  //   expiry.setDate(expiry.getDate() + 7);
  
  //   return jwt.sign({
  //     _id: this._id,
  //     email: this.email,
  //     name: this.name,
  //     exp: parseInt(expiry.getTime() / 1000),
  //   }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  // };


const wallet=mongoose.model('wallet',walletSchema,'Wallet')
module.exports=wallet;