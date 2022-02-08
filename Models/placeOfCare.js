const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('placeOfCare', {
	AppttypeGroup:{
		type: sequelize.STRING
	},
	AppttypeSpecific:{
		type: sequelize.STRING
	},
	PatientEncounters:{
		type: sequelize.INTEGER
	},
	UniquePatients:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true
});

module.exports = patient;