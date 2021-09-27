const dbData = require("../CONFIG/db.config");
const sequelize = require("sequelize");
const manageZone = dbData.define("manageZone", {
  field: {
    type: sequelize.STRING,
    allowNull: false,
  },

  plantedCrop: {
    type: sequelize.STRING,
    allowNull: false,
  },

  productionYear: {
    type: sequelize.STRING,
    allowNull: false,
  },
  tillage1: {
    type: sequelize.STRING,
    allowNull: false,
  },
  tillage2: {
    type: sequelize.STRING,
    allowNull: false,
  },
  coverCrop: {
    type: sequelize.STRING,
    allowNull: false,
  },
  phosphorousFert: {
    type: sequelize.STRING,
    allowNull: false,
  },
  nitrogenFert: {
    type: sequelize.STRING,
    allowNull: false,
  },
  structuralPractice: {
    type: sequelize.STRING,
    allowNull: false,
  },
  reasonsForPractice: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

//

manageZone.sync().then(() => {
  console.log("manageZone table created");
});
module.exports = manageZone;
