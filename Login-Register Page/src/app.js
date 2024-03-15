const express = require("express"); //importing express
const path = require("path"); //importing path
const app = express(); //setting express modules to app variable
const hbs = require("hbs"); //importing handlebars

//require("./db/conn");

const connectDB = require("./db/conn"); //importing the connection file
const Register = require("./models/registers"); //importing Database file

const port = process.env.PORT || 3000; //creating a port variable to make our node server listen to it.

const static_path = path.join(__dirname, "../public"); //importing the public folder
const temp_path = path.join(__dirname, "../templates/views"); //importing the views folder
const partials_path = path.join(__dirname, "../templates/partials"); //importing the partials

connectDB();

app.use(express.json()); //joining the json file
//The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false ) or the qs library (when true ).
app.use(
  express.urlencoded({
    //URL Encoding is the process of converting string into valid URL format
    extended: false
  })
);

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", temp_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  //setting up the URL for our index.hbs file which contains the register page of IoT Radar Sensing System
  res.render("index");
});

app.get("/login", (req, res) => {
  //setting up the URL for our index.hbs file which contains the login page of IoT Radar Sensing System
  res.render("login");
});

//The keyword async of JavaScript, added before a function makes the function return data collected
//Node.js uses asynchronous programming!
//Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.
app.post("/", async (req, res) => {
  //This module collect the login details and
  try {
    //create a new user in our database

    console.log("-----New Entry-----");
    console.log(req.body.UserName);
    console.log(req.body.Email);
    console.log("\n");
    // res.send(req.body.UserName);

    const registerEmp = new Register({
      // an object of Register is created here

      UserName: req.body.UserName, //gathering the data of the UserName
      Password: req.body.Password, //gathering the data of the Password
      PhoneNo: req.body.PhoneNo,
      Email: req.body.Email
    });
    registerEmp.save(); //save() is the most imp coz if we don't add it it will not be stored in our Database

    //status(200) to check that everything is working fine.
    //after the information is saved. send() will redirect to our IoT Radar Sensing Webapp Dashboard :)
    res.status(200).render("login");
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/login", async (req, res) => {
  //setting up the URL for our index.hbs file which contains the login page of IoT Radar Sensing System
  try {
    const user = req.body.UserName;
    const pass = req.body.Password;

    const username = await Register.findOne({ UserName: user });
    if (username.Password === pass) {
      res
        .status(201)
        .send(
          '<script>window.location.href="https://64m58z.csb.app/"</script>'
        );
    } else {
      res.send(
        '<script>alert("Invalid Login!!"); window.location.href = "/login"; </script>'
      );
    }
  } catch (error) {
    res.status(400).send("User not found!");
  }
});

app.listen(port, () => {
  //Successfully listening to our port created!
  console.log(`Server is running at port: ${port}`);
});
