const genres = require('express').Router();

const all = require('./all');
genres.get('/', all);

const single = require('./single');
genres.get('/:genre_id', single);

module.exports = genres;
