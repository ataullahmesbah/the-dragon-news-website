
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";




const Header = () => {

    
    return (
        <Container>
            <div className="text-center pt-5">
                <img src={logo} alt="" />
                <p className='text-secondary pt-3 '>
                    Journalism Without Fear or Favor
                    <small></small></p>
                <p>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
            </div>

            <div className='d-flex bg-dark bg-opacity-10 fw-semibold mb-5'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50} pauseOnHover gradient={true}>
                    I can be a React component, multiple React components, or just some text......
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nemo, amet quod a quis dolor.......
                </Marquee>
            </div>

            

        </Container>
    );
};

export default Header;