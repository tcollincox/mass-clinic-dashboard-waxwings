// const med_volunteer = {
//     userId: {
//         type: "string",
//         required: true,
//     },
//     name: {
//         fName: "string",
//         lName: "string",
//         required: true,
//     },
//     year: {
//         type: "string",
//         required: true,
//     }
// }

const med_volunteers = [
    {VolunteerType: "", VolunteerAmount:64, RecordedYear: 2019}, 
    {VolunteerType: "", VolunteerAmount:45, RecordedYear: 2020}, 
	{VolunteerType: "", VolunteerAmount:20, RecordedYear: 2021} ]  ;


exports.getMedVolunteers = () => {return med_volunteers} ; 