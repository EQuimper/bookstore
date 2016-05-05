Book = require('../../models/books');

module.exports = ( req, res ) => {
	const book = Book.findById(req.params.book_id, ( err, book ) => {
		if ( err ) {
			throw err;
		}
		res.json({ book });
	})
};
