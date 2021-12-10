const patients = [
    {userId: 1, type: "Diabetic", year: "2011"},
    {userId: 2, type: "Hypertensive", year: "2012"},
    {userId: 3, type: "Misc", year: "2013"},
    {userId: 4, type: "Hypertensive", year: "2014"},
    {userId: 5, type: "Diabetic", year: "2015"}
]

exports.getPatients = () => {return patients} ; 