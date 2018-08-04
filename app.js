const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express Instance
const app = express();

// Express Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Run the API
app.listen(process.env.API_PORT, () => {
  console.log('API is running on port 8080');
});
