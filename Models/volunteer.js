const med_volunteers = [
    {VolunteerType: "Medical", VolunteerAmount:64, RecordedYear: 2019}, 
    {VolunteerType: "Medical", VolunteerAmount:45, RecordedYear: 2020}, 
	{VolunteerType: "Medical", VolunteerAmount:20, RecordedYear: 2021},
    {VolunteerType: "Non-Medical", VolunteerAmount:200, RecordedYear: 2019}, 
    {VolunteerType: "Non-Medical", VolunteerAmount:135, RecordedYear: 2020}, 
	{VolunteerType: "Non-Medical", VolunteerAmount:80, RecordedYear: 2021} ]  ;


exports.getVolunteers = () => {return med_volunteers} ; 