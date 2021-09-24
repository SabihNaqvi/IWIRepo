const dbdata = require('../CONFIG/db.config')
const sequelize = require('sequelize')
const producerField = dbdata.define('producerField',{
    FieldName :{
        type:sequelize.STRING
    },
    Size :{
        type : sequelize.INTEGER
    },
    CultivatedArea :{
        type : sequelize.INTEGER
    },
    SoilTestResult :{ 
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    SubSurfaceTileDrained :{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    SurfaceTileDrained :{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    FarmingDirection :{
        type:sequelize.STRING
    },
    YearFarmed:{
        type:sequelize.INTEGER
    },
    ExistConePractice :{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    EQIPorCPS:{
        type : sequelize.BOOLEAN,
        defaultValue: false
    }
})
producerField.sync().then(() => {
  });
module.exports = producerField


