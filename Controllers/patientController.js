const patientModel = require("../Models/patient");


exports.patientsPage = (req,res) => {

    const patient = patientModel.getPatients();

    res.render('patients.ejs', {patient: patient});
}

