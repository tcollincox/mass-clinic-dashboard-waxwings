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
    {name: "Dennis" , type: "Medical", year: 2020}, 
    {name: "Ty", type: "Non-medical" , year: 2019}, 
    {name: "Jacob" , type: "Medical", year: 2021} ]  ;


exports.getMedVolunteers = () => {return med_volunteers} ; 