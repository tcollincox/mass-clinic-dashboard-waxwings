// const demographics = [
//     {DemographicType: 'male', PatientAmount: 714, RecordedYear: 2019}, 
//     {DemographicType: 'male', PatientAmount: 581, RecordedYear: 2020}, 
//     {DemographicType: 'male', PatientAmount: 282, RecordedYear: 2021}, 
//     {DemographicType: 'female', PatientAmount: 1128, RecordedYear: 2019}, 
//     {DemographicType: 'female', PatientAmount: 906, RecordedYear: 2020},
//     {DemographicType: 'female', PatientAmount: 511, RecordedYear: 2021},
//     {DemographicType: '19+', PatientAmount: 1834, RecordedYear: 2019}, 
//     {DemographicType: '19+', PatientAmount: 1487, RecordedYear: 2020},
//     {DemographicType: '19+', PatientAmount: 793, RecordedYear: 2021},
//     {DemographicType: '18under', PatientAmount: 0, RecordedYear: 2019}, 
//     {DemographicType: '18under', PatientAmount: 0, RecordedYear: 2020},
//     {DemographicType: '18under', PatientAmount: 0, RecordedYear: 2021},
//     {DemographicType: 'AfricanAmerican', PatientAmount: 565, RecordedYear: 2019}, 
//     {DemographicType: 'AfricanAmerican', PatientAmount: 414, RecordedYear: 2020},
//     {DemographicType: 'AfricanAmerican', PatientAmount: 227, RecordedYear: 2021},
//     {DemographicType: 'Hispanic/Latino', PatientAmount: 399, RecordedYear: 2019}, 
//     {DemographicType: 'Hispanic/Latino', PatientAmount: 332, RecordedYear: 2020},
//     {DemographicType: 'Hispanic/Latino', PatientAmount: 174, RecordedYear: 2021},
//     {DemographicType: 'Multi-Racial', PatientAmount: 142, RecordedYear: 2019}, 
//     {DemographicType: 'Multi-Racial', PatientAmount: 125, RecordedYear: 2020},
//     {DemographicType: 'Multi-Racial', PatientAmount: 71, RecordedYear: 2021},
//     {DemographicType: 'White', PatientAmount: 732, RecordedYear: 2019}, 
//     {DemographicType: 'White', PatientAmount: 610, RecordedYear: 2020},
//     {DemographicType: 'White', PatientAmount: 318, RecordedYear: 2021},
//     {DemographicType: 'Other', PatientAmount: 4, RecordedYear: 2019}, 
//     {DemographicType: 'Other', PatientAmount: 6, RecordedYear: 2020},
//     {DemographicType: 'Other', PatientAmount: 2, RecordedYear: 2021},
//     {DemographicType: 'Undeclared', PatientAmount: 0, RecordedYear: 2019}, 
//     {DemographicType: 'Undeclared', PatientAmount: 0, RecordedYear: 2020},
//     {DemographicType: 'Undeclared', PatientAmount: 0, RecordedYear: 2021}


//random comment


// exports.getDemographics = () => {return demographics} ;

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
