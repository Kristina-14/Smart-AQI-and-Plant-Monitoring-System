const mongoose = require("mongoose");

const empSchema = new mongoose.Schema(
  /*The mongoose.Schema allows us to define the fields stored in each document 
    along with their validation requirements and default values.*/
  {
    UserName: {
      type: String,
      required: true,
      unique: true
    },

    Password: {
      type: String,
      required: true
    },

    PhoneNo: {
      type: String
    },

    Email: {
      type: String
    }
  }
);

const Register = new mongoose.model("Register", empSchema);
//Schemas are then "compiled" into models using the mongoose.model() method.

module.exports = Register;
//module.exports tells that out Registers needs to be exported so that it can be used by the other modules.
