import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleCard = (props) => {
    const  article  = props.article;

    return(
        <div className="card-container">
            <div className="desc">
                <h3>{article.title}</h3>
                <h3>{article.author}</h3>
                <p>{article.journal}</p>
            </div>
        </div>
    )
};

export default ArticleCard;