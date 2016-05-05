const books = require('express').Router();
const all = require('./all');

books.get('/', all);

module.exports = books;
