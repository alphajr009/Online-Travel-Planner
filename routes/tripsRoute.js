const express = require("express");
const router = express.Router();
const Trip = require("../models/trip");


router.post("/createtrip", async (req, res) => {
    const { userid, doselectedplace, eatselectedplace, stayselectedplace } = req.body;

    try {
        const plan = {
            userid: userid,
            do: doselectedplace,
            eat: eatselectedplace,
            stay: stayselectedplace,
        };

        const newTrip = new Trip(plan);
        const savedTrip = await newTrip.save();

        console.log(savedTrip);
        res.status(201).json(savedTrip);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




module.exports = router