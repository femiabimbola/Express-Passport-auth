export const createloanValidationSchema = {
  firstName: {
    isLength: {
      options: { min: 4, max: 32 },
      errorMessage: "firstame cannot be less than 3",
    },
    notEmpty: { errorMessage: "firstname can not be empty" },
    isString: { errorMessage: "firstname is a string" },
  },

  lastName: {
    notEmpty: { errorMessage: "lastname can not be empty" },
    isString: { errorMessage: "lastname is a string" },
  },

  email: {
    notEmpty: { errorMessage: "email cannot be empty" },
    isEmail: { errorMessage: "Enter a valid email" },
  },

  address: {
    notEmpty: { errorMessage: "Address cannot be empty" },
  },

  phone: {
    notEmpty: { errorMessage: "Phone number cannot be empty" },
    isInt: { errorMessage: "only number allowed" },
  },
};
