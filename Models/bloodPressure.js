const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('bloodPressure', {
	LevelOfControl:{
		type: sequelize.STRING
	},
	PatientAmount:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
});

module.exports = patients;