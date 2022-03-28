const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('PatientRetention', {
	AmountOfYears:{
		type: sequelize.INTEGER
	},
	PatientAmount:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});
patient.removeAttribute('id');

module.exports = patient;