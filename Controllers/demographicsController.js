const demographicsModel = require("../Models/demographics");

//function calls the data from the model and is going to give it to the view
exports.demographicsPage = (req, res) => {

    //variable is all of the data from the model
    const demographics = demographicsModel.getDemographics();

    //view is getting called from demographics.ejs and the data from the part that is demographics:demographics
    res.render('demographics.ejs', {demographics: demographics});
} 
