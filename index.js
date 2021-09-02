require('dotenv').config(); // this allows to stash artificial en variables in a file
const express = require('express');
const cors = require('cors');
const server = express();

const PORT = process.env.PORT || 5000;
server.use(express.json());
server.use(cors());

server.get('/api', (req, res) => {
	res.send(`<h1>We 45 is awesome!</>`);
});
server.get('/', (req, res) => {
	res.send(`<h1>We 45 rocks</>`);
});
server.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
