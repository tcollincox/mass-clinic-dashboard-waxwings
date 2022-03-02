const express =  require("express");
const router = express.Router();
const Applications = require('../Models/applications');
let applications = [];
const BloodA1C = require('../Models/bloodA1C');
let bloodA1C = [];


router.get('/', (req, res) =>{
    Applications.findAll({attributes: ['ApplicationType', 'PatientAmount', 'RecordedYear']})
    .then(application => applications = application)
    .then(BloodA1C.findAll({attributes: ['TimePeriod', 'NumDom', 'TotalPercent', 'PatientAmountSpecifc', 'PatientAmountTotal' ]}))
    .then(blood => bloodA1C = blood)
    .then(res.render('index.ejs', {data :{applications:applications, bloodA1C:bloodA1C}}))
});

module.exports =  router;
