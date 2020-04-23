const express = require('express');

const Food = require('../food/foodModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({api: "App is go"});
});

server.get('/food', (req, res) => {

})

server.post('/food', (req, res) => {

})

server.delete('/food', (req, res) => {

})

module.exports = server;