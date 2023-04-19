import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
        <div>
            <h4 className='pt-5'>Q-Zone</h4>

            <div className="justify-content-center d-flex align-items-start flex-column">
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>

        
    );
};

export default QZone;