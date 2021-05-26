const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title: String,
    author: String,
    journal: String,
    year: Number,
    month: Number,
    volume: Number,
    number: Number,
    pages: String,
    eprint: Number,
    eprinttype: String,
    eprintclass: String,
    annote: String,
    publisher: String
});

//model
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;