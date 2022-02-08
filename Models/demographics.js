const sequelize = require('sequelize');
const db = require('../config/database');

const demographics = db.define('PatientDemographics', {
    DemographicType: {
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

module.exports = demographics;
const sequelize = require('sequelize');
const db = require('../config/database');

const demographics = db.define('PatientDemographics', {
    DemographicType: {
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

module.exports = demographics;