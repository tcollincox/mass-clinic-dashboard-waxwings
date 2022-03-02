const express = require('express');
const router = express.Router();
const Applications = require('../Models/applications');

router.get("/", (req, res) => Applications.findAll({attributes: ['ApplicationType', 'PatientAmount', 'RecordedYear']})
.then(patient => {
    res.render('applications.ejs', {patient:patient});
})
.catch(err => console.log("from routes: " + err)));



module.exports =  router;