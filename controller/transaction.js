const Wallet = require('../models/wallet');
const User = require('../models/user');




module.exports = function transaction(req, res) {

    User.findOne({ mobile: req.body.mobile }).exec(async function (err, user) {

        if (user == null) {
            return res.status(404).send('You are not registered with us Please sign up!!');
        }

        else {
            Wallet.findOne({mobile:req.body.mobile}).sort({_id:-1}).exec( function(err,walletdata){
                var wallet = new Wallet();
                wallet.creditedAmount=req.body.creditedAmount;
                wallet.type=req.body.type;
                wallet.comission=(req.body.creditedAmount)*0.0005
                wallet.charge=(req.body.creditedAmount)*0.002
                if(walletdata==null){
                    if(req.body.withdrawAMount>0){
                        return res.status(404).send('You dont have sufficient Balance!! add Money first');
                    }
                     wallet.totalAmount= req.body.creditedAmount-(wallet.comission+wallet.charge);
                }else{
                    if(req.body.withdrawAMount>0){
                        wallet.comission=((req.body.withdrawAMount)*0.0005)
                        wallet.charge=((req.body.withdrawAMount)*0.002)
                        console.log(req.body.withdrawAMount+(wallet.comission+wallet.charge)+"  "+(walletdata.totalAmount))
                        if(req.body.withdrawAMount+(wallet.comission+wallet.charge)>walletdata.totalAmount){
                            return res.status(404).send('You dont have sufficient Balance!! add Money first');
                        }
                        wallet.totalAmount=walletdata.totalAmount - req.body.withdrawAMount-(wallet.comission+wallet.charge);
                        wallet.withdrawAMount=req.body.withdrawAMount
                    }else{
                        wallet.totalAmount=walletdata.totalAmount + req.body.creditedAmount-(wallet.comission+wallet.charge);

                    }
                }
                wallet.mobile = req.body.mobile
                wallet.transactiontime = new Date();
                wallet.save(function (err, transaction) {
                    if (err) {
                        console.log(err, "Error saving transaction")
                    }
                    else {
                        res.status(200);
                        res.json({
                            "transaction": transaction,
                        });
                    }
                });
            })
            
        }
              
    })
        
    
}