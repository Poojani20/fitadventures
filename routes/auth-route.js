const router = require('express').Router();
const User = require('../models/user');



router.post('/register',(req,res) =>{
   const user = new User({
    displayName:req.body.displayName,
    email:req.body.email,
    password:req.body.password,
   })
   
   user.save()
   .then((_) => {
       res.json({ succsess: true, message: "Account has been created" })
   })

   .catch((err) => {
       
       res.json({ succsess: false, message: "Authdentication failed" })
   })
});

router.post('/login',(req,res) =>{
    res.json("Login works")
});










module.exports = router