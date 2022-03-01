const express =  require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('DashPatientGoalOutcomes.ejs'));

module.exports =  router;
