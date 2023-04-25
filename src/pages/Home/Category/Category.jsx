import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div className='pt-5'>
            { id && <h2 className='mb-3'>This is Category: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;