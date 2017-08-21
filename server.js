const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const router = express();

// API file for interacting with MongoDB
const api = require('./server/api');

// Parsers
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
router.use(express.static(path.join(__dirname, 'dist')));

// API location
router.use('/api', api);

// Send all other requests to the Angular app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
router.set('port', port);

const server = http.createServer(router);

server.listen(port, () => console.log(`Running on localhost:${port}`));