<<<<<<< HEAD
const volunteers = [
    { VolunteerType:"", VolunteerAmount:143, RecordedYear: 2019, }, 
    { VolunteerType:"", VolunteerAmount:50, RecordedYear: 2020, }, 
    { VolunteerType:"", VolunteerAmount:45, RecordedYear: 2021, } ]  ;
=======
const med_volunteers = [
    {VolunteerType: "Medical", VolunteerAmount:64, RecordedYear: 2019}, 
    {VolunteerType: "Medical", VolunteerAmount:45, RecordedYear: 2020}, 
	{VolunteerType: "Medical", VolunteerAmount:20, RecordedYear: 2021},
    {VolunteerType: "Non-Medical", VolunteerAmount:200, RecordedYear: 2019}, 
    {VolunteerType: "Non-Medical", VolunteerAmount:135, RecordedYear: 2020}, 
	{VolunteerType: "Non-Medical", VolunteerAmount:80, RecordedYear: 2021} ]  ;
>>>>>>> Trey


exports.getVolunteers = () => {return med_volunteers} ; 