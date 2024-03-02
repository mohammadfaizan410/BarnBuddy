const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 3000;
const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON and URL-encoded form data with specified limits
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Import your API routes
const apiroutes = require("./api");

// Use your API routes
app.use(apiroutes);

// Create HTTP server and listen on specified port
const server = app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
