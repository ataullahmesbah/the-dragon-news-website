import React from 'react';
import { Link } from 'react-router-dom';
import './LeftCategory.css'
import EditorsInsights from '../../pages/News/EditorsInsights/EditorsInsights';

const LeftCategory = ({category}) => {

    const {name} = category;

    return (
        <div className='ps-4 mb-3'>
            <Link to={`/category/${category.id}`} className='text-decoration-none text-black fw-bold fs-5 '>{name}</Link>

            
        </div>
    );
};

export default LeftCategory;