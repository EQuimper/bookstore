const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	genre: {
		type: String,
		require: true
	},
	author: {
		type: String,
		require: true
	},
	publisher: {
		type: String
	},
	description: {
		type: String,
		require: true
	},
	image_url: {
		type: String,
		require: true
	},
	pages: {
		type: String
	},
	buy_url: {
		type: String,
		require: true
	},
	publication_date: {
		type: String
	}

});

const Book = module.exports = mongoose.model('Book', BookSchema);
