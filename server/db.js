const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookstore');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', () =>{
	console.log('Connected with mongodb');
})

module.exports = db;
