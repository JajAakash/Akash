const express=require('express');

const bodyParser=require('body-parser');

const path=require('path');

const api=require('./routes/api');
var cors = require('cors');
const port =process.env.PORT || 5000;

const app=express();

var passport = require('passport')
// var passport = require('./moshiServer/config/passport');
var key=require('./config/key')


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
//     if(req.method=='OPTIONS'){
//         res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
//         return res.status(200).json({});
//     }
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Auth-Token");
//     // res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
//     next();
//   });

app.use(cors());







app.use(express.static(path.join(__dirname,'dist')));
//app.use(express.cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// //initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/',api);
//app.use('/auth',auth)




app.listen(port,function(){
    console.log("server running on port:" + port)

});



