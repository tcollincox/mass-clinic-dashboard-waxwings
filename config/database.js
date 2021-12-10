// var Sequelize = require('sequelize');
 const dotenv = require('dotenv');
 dotenv.config();
 var userName = process.env.USERNAMELOGIN;
 var password = process.env.PASSWORDLOGIN; 
 var massClinicDbName = process.env.MASSCLINICDATABASENAME;

 var hostName = 'mass-clinic-waxwings-server.database.windows.net';

// Initialize Sequelize to connect to sample DB
const { Sequelize } = require('sequelize');
module.exports = new Sequelize(massClinicDbName, userName, password, {
    host: hostName,
    dialect:  'mssql' 
  });

