import React, { useEffect, useState } from 'react';
import NewsItemSingle from './NewsItemSingle';
import './NewsListAll.css';
import axios from 'axios';


const NewsListAll = () => {
    const [newsItems, setNewsItems] = useState([]);
    

        useEffect(() => {
        axios.get(process.env.REACT_APP_DATA_SERVICE_URL)
            .then((response) => setNewsItems(response.data.response.results))
            .catch((error) => console.error(error))
    },
        []);


    return (
        <div className="all" data-testid="news-list-all-container">
    
            {newsItems.map((item) => (
                <NewsItemSingle
                    key={item.id}
                    headline={item.fields.headline}
                    thumbnail={item.fields.thumbnail}
                />
            ))}
        </div>
    )
};

export default NewsListAll;