const dbData = require('../CONFIG/db.config')
const sequelize = require('sequelize')
const producer = dbData.define('producers',{
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    FirstName :{
        type : sequelize.STRING,
        allowNull: false
    },
    MiddleInitial :{
        type : sequelize.STRING
    },
    LastName :{
        type : sequelize.STRING
    },
    Address1 :{
        type : sequelize.STRING,
    },
    Address2 :{
        type : sequelize.STRING,
    },
    Email :{
        type : sequelize.STRING,
        allowNull: false,
        unique:true
    },
    HomePhone :{
        type : sequelize.INTEGER
    },
    CellPhone :{
        type : sequelize.INTEGER,
        allowNull: false,
        unique:true
    },
    City:{
        type : sequelize.STRING
    },
    State :{
        type : sequelize.STRING
    },
    Country :{
        type : sequelize.STRING,
        allowNull: false
    },
    NDA :{
        type : sequelize.BOOLEAN,
        defaultValue:false
    },
    Twitter :{
        type : sequelize.BOOLEAN,
        defaultValue:false
    },
    Facebook :{
        type : sequelize.BOOLEAN,
        defaultValue:false
    }
}) 
producer.sync().then(() => {
    console.log('Producer table created');
  });
module.exports = producer