const bcrypt = require('bcryptjs')
require('../CONFIG/db.config')
const Signup = require('../models/signup.model')
const jwt = require('jsonwebtoken');
exports.postAllSignups = async(req,res)=>{
    console.log("helooooooooo")
    const { Name, Email, Password, Retype_Password,Signups} = req.body;
    if (!Name || !Email || !Password || !Retype_Password || !Signups){
        res.status(422).json({error:"Please Enter Your Credential Properly"});
    }
    if (Password.length < 7)
    res.status(402).json({ msg: "The password needs to be at least 8 characters long." });
   
    if(Password !== Retype_Password)
    res.status(400).json({ err: "Password Don't Match !"});
    try {
        const userExists = await Signup.findOne({where:{Email}});
        if (userExists){
            return res.status(401).json({error:"Email Already Exists"});
        }
        const userSignup = await Signup.create({Name, Email, Password, Retype_Password,Signups});
        console.log(`${userSignup}`, "userrrrrrrrr")
        const salt = await bcrypt.genSalt(10);
        //   const salt = 'saddasdsdd';
        userSignup.Password = await bcrypt.hash(Password, salt);
        userSignup.Retype_Password = await bcrypt.hash(Retype_Password, salt);
        await userSignup.save()
        const payload = {user: { id: userSignup.id}};
        console.log(payload, "pauloaddd")
    // res.status(201).json({message:"User Registered Successfully"})
    // const createToken = 
    jwt.sign(payload,"randomString"
    ,
        (err, token) => {
            console.log(token,"tokennnnnnnnnn")
            console.log(err,"err")
          if (err) throw err;
          res.status(200).json({token});
        }
      );

    //   const userVerification = jwt.verify(createToken,"randomString")
    //   console.log(`Here user verification number ${userVerification}`)
    // const token  = jwt.sign(payload,"randomString")
    } catch (error) {
        res.send(error)
    }
    
}

exports.getAllSignups = async(req, res) =>{
    try {
        const signupData = await Signup.findAll();
    } catch (error) {
        res.status(400).send(error)
    }
}