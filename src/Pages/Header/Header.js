import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.log(error))
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Talk To Me</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href=""><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link href="#pricing">Courses</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="">
                           <>
                                {
                                    user?.uid
                                        ?
                                        <>

                                            <span>{user?.displayName}</span>
                                            <Button onClick={handleLogOut} className='ms-2'>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'className='me-2'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                           </>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                <Image style={{height: '40px'}} roundedCircle src={user.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;