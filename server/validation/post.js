const Validator = require("validator");

module.exports = function (data) {
  let errors = {};

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required.";
  }

  if (!Validator.isLength(data.text, { max: 140 })) {
    errors.text = "Password must not contain more than 140 characters.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
