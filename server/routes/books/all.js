Book = require('../../models/books');

module.exports = ( req, res ) => {
	const books = Book.find(( err, books ) => {
		if ( err ) {
			throw err;
		}
		res.json({ books });
	});
};
