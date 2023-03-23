import React from 'react';
import './NewsItemSingle.css';

const NewsItemSingle = ({ thumbnail, headline }) => {
    return (
        <div className="single" data-testid="news-item-single-container">

            <img src={thumbnail} alt="News"/>
            <h2>{headline}</h2>
        </div>
    )
};

export default NewsItemSingle;

