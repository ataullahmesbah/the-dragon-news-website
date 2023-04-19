import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='pt-5 py-3'>Login With</h4>
            <div className="justify-content-center d-flex align-items-start flex-column">
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-primary"> <FaGithub /> Login with Github</Button>
            </div>

            <div className="">
                <h4 className='py-3'>Find Us On</h4>

                <ListGroup as="ol" >
                    <ListGroup.Item as="li"><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item as="li"><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item as="li"><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item as="li"><FaPinterest /> Pinterest</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>

            <div className="position-relative">
                <img src={bg} alt="" />
                <div class="position-absolute top-0 start-50 translate-middle-x text-md-start">
                    <p class="fs-4 text-white">Create an amazing Newspaper</p>
                </div>
            </div>
        </div>
    );
};

export default RightNav;