const express =  require("express");
const router = express.Router();
const NoShowPatient = require('../Models/noShowPatient');
let noShowPatient = [];
const  PatientAccessibility= require('../Models/patientAccessibility');
let patientAccessibility = [];
const PatientArrivalTime = require('../Models/patientArrivalTime');
let patientArrivalTime = [];
const PlaceOfCare = require('../Models/placeOfCare');
let placeOfCare = [];
const UniquePatientInYear = require('../Models/uniquePatientInYear');
let uniquePatientInYear = [];
const PatientEnrollYear = require('../Models/patientEnrollYear');
let patientEnrollYear = [];

router.get('/', async function(req, res){
    
    noShowPatient = await NoShowPatient.findAll({attributes: ['RecordedYear', 'PercentAmount' ]});
    patientAccessibility = await PatientAccessibility.findAll({attributes: ['AmountOfTime', 'PercentAmount', 'TotalAmount', 'SpecifcAmount']});
    patientArrivalTime = await PatientArrivalTime.findAll({attributes: ['TimeArrived', 'PercentAmount', 'PatientAmount']});
    placeOfCare = await PlaceOfCare.findAll({attributes: ['AppttypeGroup', 'AppttypeSpecific', 'PatientEncounters', 'UniquePatients' ]});
    uniquePatientInYear = await UniquePatientInYear.findAll({attributes: ['AmountOfYears', 'PatientAmount']});
    patientEnrollYear = await PatientEnrollYear.findAll({attributes: ['YearEnrolled', 'YearLeft', 'PatientAmount' ]});
    
    res.render('DashPatientAppointments.ejs', {data :{
        noShowPatient:noShowPatient, 
        patientAccessibility:patientAccessibility , 
        patientArrivalTime:patientArrivalTime,
        placeOfCare:placeOfCare, 
        uniquePatientInYear:uniquePatientInYear,
        patientEnrollYear: patientEnrollYear,
        
    }
})});


module.exports =  router;
