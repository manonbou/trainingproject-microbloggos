const Validator = require('validator')

//export the validation register input
//return errors value if errors occurs
module.exports = function (data) {
    let errors = {}

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.'
    }

    //isEmail function check the data.email format
    if(!Validator.isEmail(data.email)) {
        //errors save the message to send to the client if there is an error
        errors.email = 'Email is invalid.'
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required.'
    }

    if(!Validator.isLength(data.password, { min: 4, max: 30})) {
        errors.password = 'Password must contain between 4 and 30 characters.'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}