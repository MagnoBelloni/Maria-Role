import React from 'react';
import {Link} from 'react-router-dom';

import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FiHelpCircle, FiInstagram, FiTwitter } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

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
                                <Card.Title>Fulano da Silva - Rei do Rolê <span role="img" aria-label="Coroa">👑</span></Card.Title>
                                <hr />
                                <Card.Text>
                                    Meu nome é Fulando da Silva e eu consquistei o titulo de Rolezeiro III após participar de mais de 100 eventos, tenham consciencia não saiam em rolês, em epoca de COVID <span role="img" aria-label="Beijo">😘</span>.
                                </Card.Text>
                                <hr />
                                <Card.Text>
                                    <p><b>Classificação:</b> Rolezeiro III &nbsp;
                                        <OverlayTrigger overlay={<Tooltip id="help">Temos uma Classificação de nossos usuários ;) Clique para saber mais.</Tooltip>}>
                                            <Link to="/Maria-Role/classification">
                                                <FiHelpCircle/>
                                            </Link>
                                        </OverlayTrigger>
                                     </p>
                                    <p><b>Nivel no Ranking:</b> #1º</p>
                                    <p><b>Data do Ultimo Rolê:</b> 20/01/2020</p>
                                    <p><b>Número de Rolês:</b> 264</p>
                                    <p><b>Conectado nas redes: </b> <AiFillFacebook style={{color: 'blue'}}/>&nbsp;<FiInstagram />&nbsp;<FiTwitter />&nbsp;<FcGoogle /></p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={9}>
                        <Card>
                            <Card.Body style={{ color: '#000' }}>
                                <Card.Title><h1>História</h1></Card.Title>
                                <hr />
                                <Card.Text >
                                    <h3>Ultimos rolês</h3>
                                    <ul style={{ marginLeft: '20px' }}>
                                        <li>Bar Itapeva</li>
                                        <li>Karaoke - Bar Itapeva - 20/01/2020</li>
                                        <li>Rodizio de Pizza - 26/07/2019</li>
                                        <li>Karaoke - Bar Itapeva - 05/01/2020</li>
                                        <li>Karaoke - Bar Itapeva - 02/01/2020</li>
                                        <li>Karaoke - Bar Itapeva - 01/01/2020</li>
                                    </ul>

                                    <h3>Informação de consumo</h3>
                                    <ul style={{ marginLeft: '20px' }}>
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