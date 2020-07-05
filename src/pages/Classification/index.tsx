import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { GoStar } from 'react-icons/go';

import NavbarDefault from '../Navbar';
import FooterDefault from '../Footer';

import logo from '../../assets/logo.png';
import medalha from '../../assets/medalha.png';

import { Main, Rewards } from './styles';

const Classification: React.FC = () => {
    return (
        <>
            <NavbarDefault />
            <Main>
                <Row>
                    <Col md={4}>
                        <img className="img-responsive" src={logo} alt="Logo Maria Rolê" />
                    </Col>
                    <Col xs={12} md={8} >
                        <Rewards>
                            <p>
                                <GoStar />
                                <div>
                                    <h1>Sistema de Recompensas</h1>
                                    <p>Como um membro da nossa comunidade quanto mais você participa mais você sobe de nível, seja um destaque, seja um rolezeiro!</p>
                                </div>
                            </p>
                            <p>
                                <img src={medalha} alt=""/>
                                <img src={medalha} alt=""/>
                                <img src={medalha} alt=""/>
                                <div>
                                    <strong>Rei do Rolê</strong>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio ducimus, neque alias aperiam facere aliquid dolores deserunt voluptatibus, soluta unde et inventore consectetur a laudantium qui illum ab quam?</p>
                                </div>
                            </p>
                            <p>
                                <img src={medalha} alt=""/>
                                <img src={medalha} alt=""/>
                                <div>
                                    <strong>Revolucionaro dos Rolês</strong>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis ea sit voluptates repellat vel officiis voluptatibus consequatur fuga ratione laborum, rerum veniam vitae ipsum libero eligendi incidunt temporibus minima!</p>
                                </div>
                            </p>
                            <p>
                                <img src={medalha} alt=""/>
                                <div>
                                    <strong>Eu sou Rolezeiro(a)</strong>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam voluptatum expedita ad perferendis architecto dolor id eum quam? Iste amet beatae vitae architecto, delectus unde doloribus modi deleniti nulla!</p>
                                </div>
                            </p>
                        </Rewards>

                    </Col>
                </Row>
            </Main>
            <FooterDefault />
        </>
    );
}

export default Classification;