const express = require("express");
const connectDB = require("./db/conn");
const app = express();

connectDB();
const Port = process.env.Port || 8080;

app.listen(Port, () => console.log("Server started succesfully!!"));
