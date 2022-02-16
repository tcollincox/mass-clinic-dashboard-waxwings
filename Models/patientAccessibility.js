const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('patientAccessibility', {
	AmountOfTime:{
		type: sequelize.STRING
	},
	PercentAmount:{
		type: sequelize.FLOAT
	},
	TotalAmount:{
		type: sequelize.INTEGER
	},
	SpecifcAmount:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true
});

module.exports = patient;