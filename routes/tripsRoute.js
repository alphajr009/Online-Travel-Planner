const express = require("express");
const router = express.Router();
const Trip = require("../models/trip");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

router.post("/createtrip", upload.single("image"), async (req, res) => {
    console.log("Received file:", req.file);
    const { userid, tripname, doselectedplace, eatselectedplace, stayselectedplace, tripdays, tripbudget, tripnote } = req.body;

    try {
        const plan = {
            userid: userid,
            tripname: tripname,
            do: doselectedplace,
            eat: eatselectedplace,
            stay: stayselectedplace,
            tripnote: tripnote,
            tripdays: tripdays,
            tripbudget: tripbudget,
        };

        const newTrip = new Trip(plan);

        if (req.file) {
            const imagePath = req.file.path;
            const newFilename = `${newTrip._id}.jpg`;
            const newPath = `uploads/${newFilename}`;
            fs.renameSync(imagePath, newPath);
            newTrip.image = `/uploads/${newFilename}`;
        }

        const savedTrip = await newTrip.save();

        console.log(savedTrip);
        res.status(201).json(savedTrip);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router