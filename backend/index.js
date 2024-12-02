const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FoodVendors = require('./models/FoodVendors');
const Users = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/flutterappdb');

app.post('/register', (req, res) => {
    // To post / insert data into database
    const { email, password, role } = req.body;
    Users.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already registered");
            } else {
                Users.create(req.body)
                    .then(log_reg_form => res.json(log_reg_form))
                    .catch(err => res.json(err));
            }
        });
});

app.post('/login', (req, res) => {
    // To find record from the database
    const { email, password } = req.body;
    Users.findOne({ email: email })
        .then(user => {
            if (user) {
                // If user found then these 2 cases
                if (user.password === password) {
                    res.json({
                        message: "Success",
                        role: user.role // Include the role in the response
                    });
                } else {
                    res.json("Wrong password");
                }
            } else {
                // If user not found then
                res.json("No records found!");
            }
        })
        .catch(err => res.json(err));
});

app.post('/add-foodvendor', (req, res) => {
    const { name, location, description, logo , menuItems ,vendorEmail } = req.body;

    FoodVendors.create({ name, location, description, logo , menuItems ,vendorEmail })
        .then(foodVendor => res.json({ message: "Food vendor added successfully", foodVendor }))
        .catch(err => res.json(err));

    FoodVendors
});

app.get('/foodvendors', (req, res) => {
    FoodVendors.find()
        .then(foodVendors => res.json(foodVendors))
        .catch(err => res.json(err));
});


app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
