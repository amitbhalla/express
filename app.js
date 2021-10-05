const fs = require('fs');
const express = require('express');

// Globals
const APP_PORT = 3000;
const APP_HOST = '0.0.0.0';

// Create Server
const app = express();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// Tours
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours,
        },
    });
});

app.post('/api/v1/tours', (req, res) => {});

// Listening
app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Listening to ${APP_PORT} on host ${APP_HOST}...`);
});
