const express = require('express');
const router = express.Router();
const Patient = require('../Models/patientAccessibility');
router.get('/', (req, res) => Patient.findAll({attributes: ['AmountOfTime', 'PercentAmount', 'TotalAmount', 'SpecifcAmount']})
.then(patient => {
res.render('patientAccessbility.ejs', {patient:patient});
})
.catch(err => console.log('from routes: ' + err)));


module.exports =  router;