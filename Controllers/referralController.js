const db = require('../config/database');
const referralModel = require("../Models/referral");

//this function calls the data from the model and is going to give it to the view
exports.referralPage = (req,res) => {
        // this variable is now all of the data from the mode
        //the view is getting called from referrals.ejs and the data from the part that is referrals: referrals
        res.render('referrals.ejs', {referrals:  referralModel.findAll()});
}


