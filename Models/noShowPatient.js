const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('noShowPatient', {
	RecordedYear:{
		type: sequelize.INTEGER
	},
	PercentAmount:{
		type: sequelize.FLOAT
	},
}, {
	freezeTableName: true
});

module.exports = patient;