const dbData = require("../CONFIG/db.config");
const sequelize = require("sequelize");
const advisor = dbData.define("advisors", {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  FirstName: {
    type: sequelize.STRING,
    allowNull: false,
    trim: true,
  },
  MiddleInitial: {
    type: sequelize.STRING,
  },
  LastName: {
    type: sequelize.STRING,
  },
  Address1: {
    type: sequelize.STRING,
  },
  Address2: {
    type: sequelize.STRING,
  },
  Email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  HomePhone: {
    type: sequelize.STRING,
    trim: true,
  },
  CellPhone: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
    trim: true,
  },
  City: {
    type: sequelize.STRING,
  },
  State: {
    type: sequelize.STRING,
  },
  Country: {
    type: sequelize.STRING,
    allowNull: false,
  },
  NDA: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
  },
  Twitter: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
  },
  Facebook: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
  },
  // AdvisorId : {
  //     type: sequelize.INTEGER,
  //     references: {
  //         model: producer,
  //         key: 'id'
  //     }
  // }
});
advisor.sync().then(() => {
  console.log("Advisor table created");
});
module.exports = advisor;
