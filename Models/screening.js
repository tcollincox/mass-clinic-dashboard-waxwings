const sequelize = require('sequelize');
const db = require('../config/database');

const referrals = db.define('{ProvidedScreening}', {
    ToFrom: {
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

module.exports = referrals;