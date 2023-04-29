import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h4>Terms & Conditions</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quidem doloremque est iste doloribus laudantium tempora harum maiores? Error exercitationem, a nulla, autem explicabo voluptas odio numquam earum suscipit quas, libero ipsum voluptatum quos. Tempora dolor, recusandae facere eligendi maiores veritatis quasi earum distinctio consectetur eveniet nemo qui, sint accusantium!</p>
            <p>Go Back TO <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;