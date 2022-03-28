const express =  require("express");
const router = express.Router();

const Applications = require('../Models/applications');
let applications = [];
const ReferralsMassClininc = require('../Models/patientReferredMassClinic');
let referralsMassClinic = [];
const PatientFollowUp = require('../Models/followups');
let patientFollowUp = [];
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
const PatientReferredTelehealth = require('../Models/patientReferredToTelehealth');
let patientReferredTelehealth = [];
const PatientEncounter = require('../Models/patientEncounter');
let patientEncounter = [];
const PatientTypeServe = require('../Models/patientTypeServe');
let patientTypeServe = [];


router.get('/', async function(req, res){
    applications = await Applications.findAll({attributes: ['ApplicationType', 'PatientAmount', 'RecordedYear']});
    referralsMassClinic = await ReferralsMassClininc.findAll({attributes: ['ToFrom', 'PatientAmount', 'RecordedYear']});
    patientFollowUp = await PatientFollowUp.findAll({attributes: ['PatientType', 'PatientAmount', 'RecordedYear']});
    noShowPatient = await NoShowPatient.findAll({attributes: ['RecordedYear', 'PercentAmount' ]});
    patientAccessibility = await PatientAccessibility.findAll({attributes: ['AmountOfTime', 'PercentAmount', 'TotalAmount', 'SpecifcAmount']});
    patientArrivalTime = await PatientArrivalTime.findAll({attributes: ['TimeArrived', 'PercentAmount', 'PatientAmount']});
    placeOfCare = await PlaceOfCare.findAll({attributes: ['AppttypeGroup', 'AppttypeSpecific', 'PatientEncounters', 'UniquePatients' ]});
    patientReferredTelehealth = await PatientReferredTelehealth.findAll({attributes:['PatientType','RecordedYear','PatientAmount']});
    uniquePatientInYear = await UniquePatientInYear.findAll({attributes: ['AmountOfYears', 'PatientAmount']});
    patientEncounter = await PatientEncounter.findAll({attributes: ['PatientAmount', 'RecordedYear', 'TargetNumber']});
    patientTypeServe = await PatientTypeServe.findAll({attributes: ['PatientAmount', 'RecordedYear', 'PatientType']});

    res.render('index.ejs', {data : {
        applications:applications, 
        referralsMassClinic:referralsMassClinic,
        patientFollowUp:patientFollowUp,
        noShowPatient:noShowPatient, 
        patientAccessibility:patientAccessibility , 
        patientArrivalTime:patientArrivalTime,
        placeOfCare:placeOfCare, 
        patientReferredTelehealth: patientReferredTelehealth,
        uniquePatientInYear:uniquePatientInYear,
        patientEncounter: patientEncounter,
        patientTypeServe: patientTypeServe
    }
    })});

module.exports =  router;
