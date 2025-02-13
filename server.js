const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

server.listen(9000, () => {
    console.log('Server listening on port 9000');
})

module.exports = server;