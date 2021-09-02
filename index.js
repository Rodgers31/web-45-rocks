require('dotenv').config(); // this allows to stash artificial en variables in a file
const path = require('path');

const express = require('express');
const cors = require('cors');
const server = express();

const PORT = process.env.PORT || 5000;
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'client/learning/build')));

server.get('/api', (req, res) => {
	res.send(`<h1>We 45 is awesome!</>`);
});
server.get('/', (req, res) => {
	res.send(`<h1>We 45 rocks</>`);
});

server.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/learning/build', 'index.html'));
});
server.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
