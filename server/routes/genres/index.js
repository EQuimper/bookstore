const genres = require('express').Router();
const all = require('./all');

genres.get('/', all);

module.exports = genres;
