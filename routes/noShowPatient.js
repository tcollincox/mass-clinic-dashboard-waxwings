const express = require('express');
const router = express.Router();
const Patient = require('../Models/noShowPatient');

router.get('/', (req, res) => Patient.findAll({attributes: ['RecordedYear', 'PercentAmount', ]})
.then(patient => {
    res.render('patient.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;