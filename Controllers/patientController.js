const patientModel = require("../Models/patient.js");


exports.patientsPage = (req,res) => {

    const patients = patientModel.getPatients();

    res.render('patients.ejs', {patients: patients});
}

