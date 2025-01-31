const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt");


// Registeration
router.post("/register", async (req, res) => {
    

    try {
        // Generate New Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        // Create New User
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        // Save user and responsed
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Login 
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong Password");

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router