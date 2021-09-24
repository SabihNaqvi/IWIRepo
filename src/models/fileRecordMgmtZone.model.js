const dbdata = require('../CONFIG/db.config')
const sequelize = require('sequelize')
const fieldrecordmgmtzone =dbdata.define('fieldrecordmgmtzone',{
    Yield :{
        type : sequelize.INTEGER
    },
    Crop :{
        type : sequelize.STRING
    },
    secondyrRotation :{
        type:sequelize.STRING
    },
    thirdyrRotation:{
        type:sequelize.STRING
    },
    PrimaryTilllage:{
        type:sequelize.STRING
    },
    SecondaryTilllage :{
        type:sequelize.STRING
    },
    CoverCrop :{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    CCSeason:{
        type:sequelize.STRING
    },
    CCtype:{
        type :sequelize.STRING
    }
})
fieldrecordmgmtzone.sync().then(() => {
  }).catch((error)=>{
      console.log(error)
  });
module.exports = fieldrecordmgmtzone


