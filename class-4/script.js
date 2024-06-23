const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/registrationModel");

//mongodb+srv://nodejs:aeth2oSumY9UaTo0@cluster0.gu6vvuu.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0

//database connection
mongoose
  .connect(
    "mongodb+srv://nodejs:aeth2oSumY9UaTo0@cluster0.gu6vvuu.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected successfully");
  });

//midleware
app.use(express.json());

app.post("/registration", (req, res) => {
  const { name, email, phone } = req.body;

  if (name == "" || email == "" || phone == "") {
    res.send("All fields are required");
  } else {
    let registration = new User({
      name: name,
      email: email,
      phone: phone,
    });

    registration.save();

    res.send("Registration Successful");
  }
  //console.log(req.body);
  //const { name, email, phone } = req.body;
  //res.send("Hello World!");
});

// app.get("/about", function (req, res) {
//     res.send("About Page");
// });

app.listen(8000);
