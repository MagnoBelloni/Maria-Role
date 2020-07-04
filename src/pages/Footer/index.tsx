import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const FooterDefault: React.FC = () => {
    return (
        <div className="fixed-bottom">
            <Navbar>
                <Container>
                    @ 2020 Maria Role - Todos os direitos reservados.
                </Container>
            </Navbar>
        </div>
    );
};

export default FooterDefault;
