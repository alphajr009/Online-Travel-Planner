const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists." });
        }

        const newUser = new User({ email, password });
        const user = await newUser.save();
        res.send('User Registered Successfully');
    } catch (error) {
        return res.status(400).json({ error });
    }
});



router.post("/login", async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email, password: password })
        if (user) {

            const temp = {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id,
            }
            res.send(temp);
        }
        else {
            return res.status(400).json({ message: 'Login Failed' });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }

});

router.get("/getallusers", async (req, res) => {

    try {
        const users = await User.find({})
        res.send({ users });
    } catch (error) {
        return res.status(400).json({ error });
    }

});


router.patch('/changeadmin', async (req, res) => {

    const { _id, isAdmin } = req.body;

    try {

        const user = await User.findById(_id);
        user.isAdmin = true;
        await user.save();
        res.send('Admin Status updated successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send('Error updating Admin Status');
    }

});





module.exports = router