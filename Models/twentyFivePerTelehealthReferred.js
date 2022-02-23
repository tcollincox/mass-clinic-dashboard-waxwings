const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('twentyFivePerTelehealthReferred', {
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
	PatientType:{
		type: sequelize.STRING
	}
}, {
	freezeTableName: true
});

module.exports = patients;