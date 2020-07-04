import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container } from 'react-bootstrap';

import Logo from '../../assets/logo.png';

const NavbarDefault: React.FC = () => {
    return (
        <Navbar fixed="top" variant="dark">
            <Container>
                <Link to="/Maria-Role/">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    Maria Role
                    </Navbar.Brand>
                </Link>

            </Container>
        </Navbar>
    );
};

export default NavbarDefault;
