const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Screenings = require('../Models/screening.js');

router.get("/", (req, res) => Screenings.findAll({attributes: ['ToFrom', 'ScreenAmount', 'RecordedYear']})
.then(refs => {
    res.render('screenings.ejs', {screenings:refs});
})
.catch(err => console.log("from routes: " + err)));


module.exports =  router;