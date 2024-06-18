require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;