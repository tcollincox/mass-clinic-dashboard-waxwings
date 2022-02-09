const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('patientMedHome', {
	AmountOfYears:{
		type: sequelize.STRING
	},
	PatientAmount:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true
});

module.exports = patient;