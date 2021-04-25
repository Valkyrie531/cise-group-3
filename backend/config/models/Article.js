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

    },
    month: {

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
        
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);