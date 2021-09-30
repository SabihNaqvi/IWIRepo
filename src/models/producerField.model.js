const dbdata = require('../CONFIG/db.config')
const sequelize = require('sequelize')
const producerField = dbdata.define('producerField',{
    FieldName :{
        type:sequelize.STRING
    },
    Size :{
        type : sequelize.INTEGER,
        defaultValue: null
    },
    CultivatedArea :{
        type : sequelize.INTEGER,
        defaultValue: null
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
        type:sequelize.STRING,
        defaultValue: null
    },
    YearFarmed:{
        type:sequelize.INTEGER,
        defaultValue: null
    },
    ExistConePractice :{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    EQIPorCPS:{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    OperationalChallenged:{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    SketchMap:{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    ZoneMap:{
        type : sequelize.BOOLEAN,
        defaultValue: false
    },
    YeildMap:{
        type : sequelize.BOOLEAN,
        defaultValue: false
    }

})
producerField.sync().then(() => {
  });
module.exports = producerField


