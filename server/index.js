const express = require("express");
const app = express();

// MIDDLEWARE TO PARSE JSON DATA to JS object accessible in req.body
app.use(express.json());

// Load environment variables from .env file
require("dotenv").config();

// DATABASE
const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log(`[SUCCESS] MongoDB database connection established successfully`);
});

const port = process.env.PORT || 4444;
app.listen(port, () => {
    console.log(`[SUCCESS] Port ${port} active`);
});
