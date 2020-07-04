import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Container, Button, Modal, Form } from 'react-bootstrap';

import Logo from '../../assets/logo.png';

const NavbarDefault: React.FC = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
                    <Button variant="outline-warning" onClick={handleShow}>Entrar</Button>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Entre na sua conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                            <div className="d-flex justify-content-between">
                                <a href="#" className="d-flex justify-content-start">Esqueci minha senha.</a>
                                <a href="#" className="d-flex justify-content-end">Ainda não tem uma conta? Cadastre-se</a>
                            </div>
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Link to="/Maria-role/profile">
                                <Button variant="primary">
                                    Entrar
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NavbarDefault;
