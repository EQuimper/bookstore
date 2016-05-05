Genre = require('../../models/genres');

module.exports = ( req, res ) => {
	const genres = Genre.find(( err, genres ) => {
		if ( err ) {
			throw err;
		}
		res.json({ genres });
	});
};
