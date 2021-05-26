const express = require('express');

const router = express.Router();

const Article = require('../models/Article');



router.get('/test', (req, res) => {
    const data = {
        username: 'hi',
        age: 5
    };
    res.json(data);
});

router.get('/api', (req, res) => {
    Article.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

module.exports = router;