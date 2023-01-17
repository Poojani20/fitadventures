const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const checkAuth = require('../middleware/check-auth');




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

    User.find({email:req.body.email}).exec().then((result)=>{
        if(result.length < 1){
            return res.json({succsess:false,message:"User not found"})
        }
        const user =result[0];
        bcrypt.compare(req.body.password,user.password,(err,ret)=>{
            if(ret){
                const payload = {
                    userId : user._id,
                   
                }
                const token = jwt.sign(payload,"webBatch")
                
                return res.json({succsess:true,token:token,message:"Login Successfull!"})
            }else{
                return res.json({succsess:true,message:"Password does not match!"})
            }
        })

    }).catch(err =>{
        res.json({succsess:false,message:"Authentication Failed!!"})
    })
    
})

router.get('/profile', checkAuth, (req,res)=>{
        const userId = "63c692c5cf7e607432337b38";
        User.findById(userId).exec().then((result)=>{

            res.json({succsess:true, data:result})
        }).catch(err=>{
            res.json({succsess:false, message:"Server error"})
        })
})




module.exports = router