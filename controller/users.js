const User = require('../models/user');

module.exports = function register(req, res) {
  User.findOne({ email: req.body.email }).then(async (currentUser) => {
    if (currentUser) {
      return res.status(400).send('This email address is already in use');
    }

    else {
      var user = new User();
      user.email = req.body.email;
      user.password=req.body.password;
      user.userName=req.body.userName;
      user.mobile=req.body.mobile;
      user.save(function (err, newUser) {
        if (err) {
          console.log(err, "Error saving users")
        }
        else {
          res.status(200);
          res.json({
            "user": newUser
          });
        }
      });

    }

  }

  )
}