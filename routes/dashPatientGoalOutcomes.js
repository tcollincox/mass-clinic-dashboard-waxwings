const express =  require("express");
const router = express.Router();
const DiabetesBloodPressure = require('../Models/diabetesBloodPressure');
let diabetesBloodPressure =[];
const Cholesterol = require('../Models/cholesterol');
let cholesterol = [];
const BloodPressure = require('../Models/bloodPressure');
let bloodPressure = [];
const HbA1c = require('../Models/hbA1c');
let hbA1c = [];

router.get('/', async function(req, res){
    diabetesBloodPressure = await  DiabetesBloodPressure.findAll({attributes:['LevelOfControl', 'PatientAmount']});
    cholesterol = await Cholesterol.findAll({attributes:['LevelOfControl', 'PatientAmount']});
    bloodPressure = await BloodPressure.findAll({attributes:['LevelOfControl', 'PatientAmount']});
    hbA1c = await HbA1c.findAll({attributes:['LevelOfControl', 'PatientAmount']});

    res.render('DashPatientGoalOutcomes.ejs', {data: {
        diabetesBloodPressure : diabetesBloodPressure,
        cholesterol : cholesterol,
        bloodPressure : bloodPressure,
        hbA1c : hbA1c
    }
})});

module.exports =  router;
