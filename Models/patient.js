const patient = {
    userId: {
        type: "string",
        required: true,
    },
    name: {
        fName: "string",
        lName: "string",
        required: true,
    },
    dob: {
        type: "string",
        required: true,
    },
    reffered: {
        type: Boolean,
        required: true,
    },
}

exports.getPatients = () => {return patient} ; 