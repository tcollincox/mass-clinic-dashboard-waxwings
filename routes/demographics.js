const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Demographics = require('../Models/demographics');

router.get("/", (req, res) => Demographics.findAll({attributes: ['DemographicType', 'PatientAmount', 'RecordedYear']})
.then(demo => {
    res.render('demographics.ejs', {demographics:demo});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;