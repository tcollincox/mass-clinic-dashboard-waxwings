const insuranceModel = require("../Models/insurance");

exports.insurancePage = (req,res) => {
        const insurance = insuranceModel.getInsurance();
        res.render('insurance.ejs', {insurance: insurance});
}