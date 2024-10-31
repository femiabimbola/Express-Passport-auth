import { query, validationResult, body, matchedData } from "express-validator";

export const createUserValidationSchema = {
  fullname: {
    isLength: {
      options: { min: 4, max: 32 },
      errorMessage: "name cannot be less than 3",
    },
    notEmpty: { errorMessage: "name can not be empty" },
    isString: { errorMessage: "name is a string" },
  },

  username: {
    notEmpty: { errorMessage: "display can not be empty" },
    isString: { errorMessage: "display is a string" },
  },

  email: {
    notEmpty: { errorMessage: "email cannot be empty" },
    isEmail: true,
  },

  password: {
    notEmpty: { errorMessage: "Password cannot be empty" },
    isLength: { options: { min: 8 }, errorMessage: "password cannot be less than 6" },
    matches: {
      options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
      errorMessage: "Password must contain at least a digit, symbol, uppercase and lowercase",
    },
  },
};
