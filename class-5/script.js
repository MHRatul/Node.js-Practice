const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./model/registrationModel");

//database connection
mongoose
    .connect(
        "mongodb+srv://ratulofficial015:VURA1txsaZeIcM56@cluster0.ynnfqu6.mongodb.net/myNewdb?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("connection successful"));

//middleware
app.use(express.json());

app.post("/create", (req, res) => {
    const { name, email, password, address } = req.body;
    try {
        if (name == "" || email == "" || password == "" || address == "") {
            res.send("All fields are required");
        } else if (password.length < 4) {
            return res.status(201).json("Password Minimum length should be 4");
        } else {
            let profile = new User({
                name: name,
                email: email,
                password: password,
                address: address,
            });

            profile.save();
            res.send(profile);
            //console.log (profile);
        }
    } catch (error) {
        console.log(error);
    }

    //add user to database

    //return success

    //res.send("Hello World!");
});

//update user
app.put("/edit/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.send(updateUser);
    } catch (error) {
        console.log(error);
    }
});

//delete user
app.delete("/delete/:id", async (req, res) => {
    try {
        let { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        res.send(deleteUser);
    } catch (error) {
        console.log(error);
    }
});

//get user
app.get("/users", async (req, res) => {
    try {
        const allUser = await User.find();
        res.send(allUser);
    } catch (error) {
        console.log(error);
    }
});

app.listen(8000);
