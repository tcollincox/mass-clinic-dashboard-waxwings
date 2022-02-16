const express = require('express');
const router = express.Router();
const Referrals = require('../Models/patientReferredMassClinic');

router.get("/", (req, res) => Referrals.findAll({attributes: ['ToFrom', 'PatientAmount', 'RecordedYear']})
.then(patients => {
    res.render('patientReferredMassClinic.ejs', {patients:patients});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;