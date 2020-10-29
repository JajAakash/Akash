const mongoose=require('mongoose')
const bcrypt = require('bcrypt')

const Schema=mongoose.Schema;

const userSchema=new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    // name:{type:String, required:true},
    userName:{type:String, required:true},
    mobile: {type:Number, required:true,unique:true},
  //   wallet: [{type: Schema.Types.ObjectId, ref:"wallet",
      
  //     // amount:{type:Number},credit:{type:Number},deposit:{type:Number},transactiontime:{type:Date},
  // }]
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


const user=mongoose.model('user',userSchema,'USER')
module.exports=user;