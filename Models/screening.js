const sequelize = require('sequelize');
const db = require('../config/database');

const screenings = db.define('ProvidedScreening', {
    PatientAmount: {
        type: sequelize.INTEGER
    },
    RecordedYear: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true
});

module.exports = screenings;