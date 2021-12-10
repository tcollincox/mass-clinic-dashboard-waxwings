const sequelize = require('sequelize');
const db = require('../config/database');

const followUps = db.define('PatientFollowUp', {
    PatientType: {
        type: sequelize.STRING
    },
    PatientAmount: {
        type: sequelize.INTEGER
    },
    RecordedYear: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true
});

module.exports = followUps;