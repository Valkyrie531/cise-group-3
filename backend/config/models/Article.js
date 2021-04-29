const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    journal: {
        type: String
    },
    year: {
        type: Number
    },
    month: {
        type: Number
    },
    volume: {

    },
    number: {

    },
    pages: {

    },
    eprint: {

    },
    eprinttype: {

    },
    eprintclass: {

    },
    annote: {

    },
    publisher: {
        type: String;
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);