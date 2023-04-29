import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const NavigationBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => 
            console.log(error))
    }

    return (
        <Container>
            <Navbar className='' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold gap-3 align-items-center ">
                            
                                <Link to='/category/0'>Home</Link>
                            
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav className='fw-semibold gap-2 align-items-center'>

                            {user && 
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                           }

                            

                                {user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>

                                }

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;