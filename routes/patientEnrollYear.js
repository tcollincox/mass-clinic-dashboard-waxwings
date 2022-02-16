const express = require('express');
const router = express.Router();
const Patient = require('../Models/patientEnrollYear');
router.get('/', (req, res) => Patient.findAll({attributes: ['YearEnrolled', 'YearLeft', 'PatientAmount' ]})
.then(patient => {
res.render('patientEnrollYear.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;