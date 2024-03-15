/*Const is the variables declared with the keyword const
 that stores constant values. const declarations are block-scoped
  i.e. we can access const only within the block where it was declared.*/

/* require() is a built-in function to include external 
  modules that exist in separate files. require() statement basically reads 
  a JavaScript file, executes it, and then proceeds to return the export object.*/
const mongoose = require("mongoose");

const URI =
  "mongodb+srv://try123:try123@cluster0.vw8fk.mongodb.net/IoTRegistration?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log(`connected!`);
    })
    .catch((err) => console.log(`not connected!`));
};

module.exports = connectDB;
