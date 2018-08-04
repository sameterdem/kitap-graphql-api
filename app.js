const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Dotenv config
dotenv.config();

// Database connection
mongoose.connect(
  process.env.MONGO_CONNECTION,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

// Express Instance
const app = express();

// Express Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Run the API
app.listen(process.env.API_PORT, () => {
  console.log(`API is running on port ${process.env.API_PORT}`);
});
