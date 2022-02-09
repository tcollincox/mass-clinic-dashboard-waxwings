const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('PatientReferredToTelehealth', {
	PatientType:{
		type: sequelize.STRING
	},
	PatientAmount:{
		type: sequelize.INTEGER
	},
	RecordedYear:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true
});

module.exports = patient;