const express = require("express");
const router = express.Router();
const Place = require("../models/place");
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



router.post("/addplace", upload.array("images", 7), async (req, res) => {

    const newplace = new Blog({
        name: req.body.name,
        category: req.body.category,
        location: req.body.location,
        description: req.body.description,
        opentime: req.body.opentime,
        closetime: req.body.closetime,
    });

    try {
        const savedPlace = await newplace.save();


        const updatedFiles = req.files.map((file, index) => {
            const oldPath = file.path;
            const newFilename = `${savedPlace._id}-${index}.jpg`;
            const newPath = `uploads/${newFilename}`;
            fs.renameSync(oldPath, newPath);
            return newPath;
        });


        const imageUrls = updatedFiles.map((path) => "/uploads/" + path.split("/").pop());
        savedPlace.images = imageUrls;
        await savedPlace.save();

        return res.send("Place Created Successfully");

    } catch (error) {
        console.log("error in route");
        console.log(newplace);
        return res.status(400).json({ error });
    }
});



module.exports = router