const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('providedScreening', {
	PatientAmount:{
		type: sequelize.INTEGER
	},
	RecordedYear:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true
});

module.exports = patients;