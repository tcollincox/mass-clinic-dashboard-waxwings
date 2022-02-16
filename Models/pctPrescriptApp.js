const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('pctPrescriptApp', {
	TargetPercent:{
		type: sequelize.INTEGER
	},
	PercentAchived:{
		type: sequelize.INTEGER
	},
	RecordedYear:{
		type: sequelize.INTEGER
	},
	Numerator:{
		type: sequelize.INTEGER
	},
	Denominator:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true
});

module.exports = patient;