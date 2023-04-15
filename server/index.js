const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");

// MIDDLEWARE TO PARSE JSON DATA to JS object accessible in req.body
app.use(express.json());

// To enable cross-origin requests, the Node.js application needs to include CORS middleware.
const cors = require("cors");
app.use(cors());

// Load environment variables from .env file
require("dotenv").config();

// DATABASE
const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log(`[SUCCESS] Database connection established.`);
});

// ROUTE
app.use("/api/tasks", taskRoute);

// Open port for connection
const port = process.env.PORT || 4444;
app.listen(port, () => {
    console.log(`[SUCCESS] Port ${port} active`);
});
