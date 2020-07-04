import React from 'react';

import { Row, Col, Container, Card } from 'react-bootstrap';

import NavbarDefault from '../Navbar';
import FooterDefault from '../Footer';

import { Main } from './styles';

const Profile: React.FC = () => {
    return (
        <>
            <NavbarDefault />
            <Main>
                <Row>
                    <Col xs={12} md={3}>
                        <Card>
                            <div className="text-center">
                                <Card.Img className="img-thumbnail" variant="top" src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" />
                            </div>

                            <Card.Body style={{ color: '#000' }}>
                                <Card.Title>Fulano da Silva - Rei do Camarote</Card.Title>
                                <hr />
                                <Card.Text>
                                    Consquistei o titulo de Rei do Camarote após participar de mais de 100 eventos, tenham consciencia não saiam em rolês, em epoca de COVID 😘.<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi, nulla commodi dolorem soluta velit. Suscipit adipisci incidunt necessitatibus omnis sint ad amet, molestias ducimus rem mollitia! Repudiandae, quos ad.
                                </Card.Text>
                                <hr />
                                <Card.Text>
                                    <p><b>Data do Ultimo Rolê:</b> 20/01/2020</p>
                                    <p><b>Número de Rolês:</b> 264</p>
                                    <p><b>Nivel no Ranking:</b> #1º</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={9}>
                        <Card>
                            <Card.Body style={{ color: '#000' }}>
                                <Card.Title>História</Card.Title>
                                <hr />
                                <Card.Text >
                                    <h2>Ultimos rolês</h2>
                                    <ul style={{marginLeft: '20px'}}>
                                        <li>Bar Itapeva</li>
                                        <li>Karaoke - Bar Itapeva - 20/01/2020</li>
                                        <li>Karaoke - Bar Itapeva - 10/01/2020</li>
                                        <li>Karaoke - Bar Itapeva - 05/01/2020</li>
                                        <li>Karaoke - Bar Itapeva - 02/01/2020</li>
                                        <li>Karaoke - Bar Itapeva - 01/01/2020</li>
                                    </ul>
                                
                                    <h2>Informação de consumo</h2>
                                    <ul style={{marginLeft: '20px'}}>
                                        <li>Brahma</li>
                                        <li>Budwaiser</li>
                                        <li>Skol</li>
                                    </ul>
                                </Card.Text>
                                <hr />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Main>


            <FooterDefault />
        </>
    );
}

export default Profile;