const express = require("express");
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const nodemon = require("nodemon");
const userRoute = require('./routes/users');
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

dotenv.config();

// Connecting Mongodb
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB connection error ", error);
    }
}

connectDB()


// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postsRoute)

const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Backend is running at ${PORT}`);
})