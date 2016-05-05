const books = require('express').Router();

const all = require('./all');
books.get('/', all);

const single = require('./single');
books.get('/:book_id', single);

module.exports = books;
