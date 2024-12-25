const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('<h1> ISIMM 24/25 : ING2 </h1>');
});

// Export the app module
module.exports = app;
