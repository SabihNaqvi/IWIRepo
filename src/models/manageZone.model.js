const dbData = require("../CONFIG/db.config");
const sequelize = require("sequelize");
const manageZone = dbData.define("manageZone", {
  Fieldpicker: {
    type: sequelize.STRING,
    allowNull: false,
  },

  plantedCrop: {
    type: sequelize.STRING,
    allowNull: false,
  },

  productionYear: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  Tillage1: {
    type: sequelize.STRING,
    allowNull: false
  },
  Tillage2: {
    type: sequelize.STRING,
    allowNull: false
  },
  Season: {
      type: sequelize.STRING,
      allowNull: false
    },
    Grasses:{
      type: sequelize.STRING,
      allowNull: false
    },
  CoverCrop: {
    type : sequelize.BOOLEAN,
    defaultValue:false
  },
  PhosphorousFert: {
    type: sequelize.STRING,
    allowNull: false,
  },
  NitrogenFert: {
    type: sequelize.STRING,
    allowNull: false,
  },
  StructuralPractice: {
    type : sequelize.BOOLEAN,
    defaultValue:false
  },
  StructuralReason: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

//

manageZone.sync().then(() => {
  console.log("manageZone table created");
});
module.exports = manageZone;
