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
        type: Number
    },
    number: {
        type: Number
    },
    pages: {
        type: String
    },
    eprint: {
        type: Number
    },
    eprinttype: {
        type: String
    },
    eprintclass: {
        type: String
    },
    annote: {
        type: String
    },
    publisher: {
        type: String
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);