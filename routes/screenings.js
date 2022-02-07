const express = require('express');
const router = express.Router();
const Screenings = require('../Models/screening.js');

router.get("/", (req, res) => Screenings.findAll({attributes: ['PatientAmount', 'RecordedYear']})
.then(screenings => {
    res.render('screenings.ejs', {screenings:screenings});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;