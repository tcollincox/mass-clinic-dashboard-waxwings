const volunteerModel = require("../Models/volunteer.js");


exports.volunteersPage = (req,res) => {

    const volunteers = volunteerModel.getVolunteers();
    res.render('volunteers.ejs', {volunteers: volunteers});
}
