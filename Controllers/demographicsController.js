const demographicsModel = require("../Models/demographics");

exports.demographicsPage = (req, res) => {
<<<<<<< HEAD
    
    const demographics = demographicsModel.getDemographics();

    res.render('demographics.ejs', {demographics: demographics});
} 
=======

    const demographics = demographicsModel.getDemographics();

    res.render('demographics.ejs', {demographics: demographics});
} 
>>>>>>> main
