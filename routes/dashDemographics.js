const express =  require("express");
const router = express.Router();

const Demographics = require('../Models/demographics');
let demographics = [];

router.get('/', async function(req, res){

    demographics = await Demographics.findAll({attributes: ['DemographicType', 'PatientAmount', 'RecordedYear']});

res.render('DashDemographics.ejs', {data : {
    demographics: demographics
}
})});

module.exports =  router;
