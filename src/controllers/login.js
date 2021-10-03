const Login = require('../models/signup.model')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
exports.postAllLoginsList = async(req,res)=>{
    try {
        const { Email, Password } = req.body;
        if (!Email || !Password){
            res.status(400).json({error:"Invalid Credential"})
        }
        const userLogin = await Login.findOne({where:{Email}});

        const isMatch = await bcrypt.compare(Password,userLogin.Password)
        if (!isMatch){
            return res.status(422).json({error:"Invalid Credentials"})
        }
        else{
            const payload = {
                user: { id: userLogin.id }
              };
              jwt.sign(payload, "randomString", (err, token) => {
                if (err) throw err;
                res.status(200).json({ token });
              });
        }
    } catch (error) {
        res.status(400).send(error)
    }

}

exports.getAllLoginsList = async(req, res) =>{
    try {
        const LoginData = await Login.findAll();
        res.status(200).send(LoginData)
    } catch (error) {
        res.status(400).send(error)
    }
}