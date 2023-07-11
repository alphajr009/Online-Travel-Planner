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

    const newplace = new Place({
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


router.get("/getallplaces", async (req, res) => {

    try {
        const places = await Place.find({})
        return res.json({ places })
    } catch (error) {
        return res.status(400).json({ message: error })
    }


});


router.patch('/deleteplace', async (req, res) => {

    const { _id } = req.body;

    try {

        const place = await Place.findByIdAndRemove(_id);

        if (!place) return res.status(404).send('Place not found');

        // Delete associated images
        for (let index = 0; index < 7; index++) {
            const imagePath = `uploads/${place._id}-${index}.jpg`;
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        res.send('Place deleted successfully');

    } catch (error) {
        console.log(error);
        res.status(400).send('Error deleting Place');
    }

});



module.exports = router