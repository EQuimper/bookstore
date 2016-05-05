const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({
	name: {
		type: String
	}
});

const Genre = module.exports = mongoose.model('Genre', GenreSchema);
