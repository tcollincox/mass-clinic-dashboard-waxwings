const demographicsModel = require("../Models/demographics");

exports.demographicsPage = (req, res) => {

    const demographics = demographicsModel.getDemographics();

    res.render('demographics.ejs', {demographics: demographics});
} 