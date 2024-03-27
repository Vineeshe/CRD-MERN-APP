const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
const userRoute = require("./routes/userRoute");
const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.URI).then(() => {
    console.log("Database connected sucessfully")
    app.listen(process.env.PORT || 8000);
}).catch(() => {
    console.log("error", error)
})
app.use(userRoute);


