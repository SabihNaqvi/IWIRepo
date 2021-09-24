const mysql = require('mysql')
const { Sequelize } = require('sequelize');
const mysqlConnection = new Sequelize('IWITEST', 'newuser','password', {
    host: 'localhost',
    dialect: 'mysql',
  });
  mysqlConnection.authenticate().then(
    console.log('Connection has been established successfully.')
  ).catch ((error) =>
    console.error('Unable to connect to the database:', error)
  )
  module.exports = mysqlConnection
 