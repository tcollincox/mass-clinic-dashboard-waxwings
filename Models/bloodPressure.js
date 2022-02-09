const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('bloodPressure', {
	TimePeriod:{
		type: sequelize.STRING
	},
	NumDom:{
		type: sequelize.STRING
	},
	TotalPercent:{
		type: sequelize.FLOAT
	},
	PatientAmountSpecifc:{
		type: sequelize.INTEGER
	},
	PatientAmountTotal:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true
});

module.exports = patients;