import React, { useEffect, useState } from 'react';
import LeftCategory from '../Leftcategory/LeftCategory';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div className='pt-5 '>
            <h3 className='mb-3'>All Category</h3>
            {
                categories.map(category => <LeftCategory
                key={category.id}
                category={category}
                ></LeftCategory>)
            }
        </div>
    );
};

export default LeftNav;