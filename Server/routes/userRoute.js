const express = require("express");
const mongoose = require("mongoose");
const User = require('../Models/userModel');
const router = express.Router(); //app will be replaced by router





//user enetring data from frontend and storing backend
router.get("/favicon.ico", (req, res) => {
    res.status(204).end();
});
router.post("/", async (req, res) => {
    const { name, email, age } = req.body; // Destructuring name, email, and age from req.body

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required fields.' });
    }

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        })
        res.status(201).json(userAdded)

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});
// show all added data
router.get("/", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);


    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
// find single user

router.get("/:id", async (req, res) => {
    const { id } = req.params;//URL se id bahar lene keliye

    try {
        const singleUser = await User.findById(id);
        res.status(200).json(singleUser);


    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

//Delete operation
router.delete("/:id", async (req, res) => {
    const { id } = req.params;//Extracting id from the URL

    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json(deleteUser);


    } catch (error) {
        console.log(error);
        res.send(500).json({ error: error.message });
    }
});

//update data
router.patch("/:id", async (req, res) => {
    const { id } = req.params;//Extracting id from the URL

    const { name, email, age } = req.body; //Destructuring name, email, and age from req.body

    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true, });
        res.status(200).json(updateUser);


    } catch (error) {
        console.log(error);
        res.send(500).json({ error: error.message });
    }
});










module.exports = router;