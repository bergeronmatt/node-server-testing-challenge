const express = require('express');

const server = express();

const Router = require('../food/foodRouter');

server.use(express.json());
server.use('/api/foods', Router);

//sanity test
server.get('/', (req, res) => {
    res.status(200).json({api: "App is go"});
});

module.exports = server;