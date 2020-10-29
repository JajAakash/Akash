const bcrypt = require('bcrypt')
const User = require('../models/user');

module.exports = function login(req,res){
    
    User.findOne({email:req.body.email}).exec(async function(err,user){
      if(user==null){
        return res.status(404).send('You are not registered with us Please sign up!!');
      }
      try{
        if(req.body.password===user.password){
          //let payload={subject: req.body.email}
          //var token;
          //token = user.generateJwt();
          res.status(200);
          res.json({
            
            "login": true
          });
        }
        else{
          return res.status(401).send('Your password is incorrect');
        }
      }
      catch{
        res.status(500).send()
      }
  })
  
  }