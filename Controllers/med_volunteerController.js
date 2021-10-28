const med_volunteerModel = require("../Models/med_volunteer.js");


exports.med_volunteersPage = (req,res) => {

    const med_volunteers = med_volunteerModel.getMedVolunteers();
    res.render('med_volunteers.ejs', {med_volunteers: med_volunteers});
}
