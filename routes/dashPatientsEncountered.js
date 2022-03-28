const express =  require("express");
const router = express.Router();

const Applications = require('../Models/applications');
let applications = [];
const Followups = require('../Models/followups');
let followups = [];
const PatientEncounter = require('../Models/patientEncounter');
let patientEncounter = [];
const ReferralsMassClininc = require('../Models/patientReferredMassClinic');
let referralsMassClinic = [];
const ReferralsToTelehealth = require('../Models/patientReferredToTelehealth');
let referralsToTelehealth = [];
const PatientTypeServe = require('../Models/patientTypeServe');
let patientTypeServe = [];
const ProvidedScreening = require('../Models/providedScreening');
let providedScreening = [];
const Volunteers = require('../Models/volunteer');
let volunteers = [];
const PatientRetention = require('../Models/patientRetention');
let patientRetention = [];

router.get('/', async function(req, res){

    applications = await Applications.findAll({attributes: ['ApplicationType', 'PatientAmount', 'RecordedYear']});
    followups = await Followups.findAll({attributes: ['PatientType', 'PatientAmount', 'RecordedYear']});
    patientEncounter = await PatientEncounter.findAll({attributes: ['PatientAmount', 'RecordedYear', 'TargetNumber']});
    referralsMassClinic = await ReferralsMassClininc.findAll({attributes: ['ToFrom', 'PatientAmount', 'RecordedYear']});
    referralsToTelehealth = await ReferralsToTelehealth.findAll({attributes: ['PatientType', 'PatientAmount', 'RecordedYear' ]});
    patientTypeServe = await PatientTypeServe.findAll({attributes: ['PatientAmount', 'RecordedYear', 'PatientType']});
    providedScreening = await ProvidedScreening.findAll({attributes: ['PatientAmount', 'RecordedYear' ]});
    patientRetention = await PatientRetention.findAll({attributes: ['AmountOfYears', 'PatientAmount']});
    volunteers = await Volunteers.findAll({attributes: ['VolunteerType', 'VolunteerAmount', 'RecordedYear']});
    

    res.render('DashPatientsEncountered.ejs', {data : {
        applications:applications,
        followups:followups,
        patientEncounter: patientEncounter,
        referralsMassClinic:referralsMassClinic,
        referralsToTelehealth:referralsToTelehealth,
        patientTypeServe: patientTypeServe,
        providedScreening: providedScreening,
        volunteers:volunteers,
        patientRetention:patientRetention
    }
})});

module.exports =  router;
