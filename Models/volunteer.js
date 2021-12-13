const sequelize = require('sequelize');
const db = require('../config/database');

const volunteers = db.define('Volunteers', {
    VolunteerType: {
        type: sequelize.STRING
    },
    VolunteerAmount: {
        type: sequelize.INTEGER
    },
    RecordedYear: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true
});

module.exports = volunteers;