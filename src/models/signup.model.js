// const bcrypt = require('bcryptjs')
const sequelize = require('sequelize')
const dbData = require('../CONFIG/db.config')

const Signup = dbData.define('signups',{
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    Name :{
        type : sequelize.STRING,
        trim: true
    },
    Email :{
        type : sequelize.STRING,
        allowNull: false
    },
    Password :{
        type : sequelize.STRING
    },
    Retype_Password :{
        type : sequelize.STRING
    },
    Signups :{
        type : sequelize.BOOLEAN,
        defaultValue:false
    },
    resetToken: {
        type: sequelize.STRING,
        defaultValue: null,
        allowNull: true
      },
    expireToken: {
        type: sequelize.DATE,
	defaultValue: null,
        allowNull: true
      },
    otp: {
        type: sequelize.STRING,
        defaultValue: null,
        allowNull: true
      },

    // ,
    // tokens :[{
    //     token:{
    //         type : sequelize.STRING,
    //         required:true       
    // }}]
})

// Signup.beforeCreate('save',async function(){
//         this.Password = bcrypt.hash(this.Password,12);
//         this.Retype_Password = bcrypt.hash(this.Retype_Password,12);
// })

// Signup.method.generateauthtoken = async function(){
//     try {
//         let token = jwt.sign({where:{id}},process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save()
//         return token;
//     } catch (error) {
//         resizeBy.status(200).send(error)
//     }
// }

Signup.sync().then(() => {
    console.log('Signup table created');
  });
module.exports = Signup;