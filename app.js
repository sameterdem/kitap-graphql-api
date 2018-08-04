const express = require('express');

// Express Instance
const app = express();

// Run the API
app.listen(process.env.API_PORT, () => {
  console.log('API is running on port 8080');
});
