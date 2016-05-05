const routes = require('express').Router();

routes.get('/', ( req, res ) => {
	res.status(200).json({ message: "Connected" });
});

const genres = require('./genres');
routes.use('/genres', genres);

const books = require('./books');
routes.use('/books', books);

module.exports = routes;
