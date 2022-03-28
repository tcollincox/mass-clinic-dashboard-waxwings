const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('hbA1c', {
	LevelOfControl:{
		type: sequelize.STRING
	},
	PatientAmount:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});

module.exports = patients;