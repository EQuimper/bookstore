Genre = require('../../models/genres');

module.exports = ( req, res ) => {
	const genre = Genre.findById(req.params.genre_id, ( err, genre ) => {
		if ( err ) {
			throw err;
		}
		res.json({ genre });
	})
};
