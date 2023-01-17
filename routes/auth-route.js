const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');




router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.json({ succsess: false, message: "Hash Error!" })
        } else {
            const user = new User({
                displayName: req.body.displayName,
                email: req.body.email,
                password: hash,
            })

            user.save()
                .then((_) => {
                    res.json({ succsess: true, message: "Account has been created" })
                })

                .catch((err) => {
                    if (err.code === 11000) {
                        return res.json({ succsess: false, message: "Email is already exist!" })
                    }
                    res.json({ succsess: false, message: "Authdentication failed" })
                })
        }
    });
}
)
  

router.post('/login',(req,res) =>{
    res.json("Login works")
});










module.exports = router