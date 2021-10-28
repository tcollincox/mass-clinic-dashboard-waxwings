const optionModel = require("../Models/initialOptions");

exports.optionPage = (req, res) => {
    const options = optionModel.getOptions();

    res.render('options.ejs', {options: options});
} 
