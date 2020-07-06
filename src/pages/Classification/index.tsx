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
                                <img src={medalha} alt="" />
                                <img src={medalha} alt="" />
                                <img src={medalha} alt="" />
                                <div>
                                    <strong>Rolezeiro III</strong>
                                    <p>
                                        Ganha status mais o selo de rolezeiro número #3.
                                        <br />
                                        Cupons de desconto no Zé Delivery  cada 5 dias.
                                        <br />
                                        Promoções a cada 15 dias nos estabelecimentos parceiros.
                                        <br />
                                        Promoções exclusivas da Ambev.
                                        <br />
                                        E uma  cerveja grátis  por fim de semana.
                                    </p>
                                </div>
                            </p>
                            <p>
                                <img src={medalha} alt="" />
                                <img src={medalha} alt="" />
                                <div>
                                    <strong>Rolezeiro II</strong>
                                    <p>
                                        O usuário ganha o status de Rolezeiro número #2.
                                        <br />
                                        Cupons semanais de desconto no Zé Delivery, promoções exclusivas da Ambev.
                                        <br />
                                        E uma cerveja grátis  a cada mês no bar escolhido para o rolê.
                                    </p>    
                                </div>
                            </p>
                            <p>
                                <img src={medalha} alt="" />
                                <div>
                                    <strong>Rolezeiro I</strong>
                                    <p>
                                        O usuário ganha o status de Rolezeiro número 1#.
                                        <br />
                                        Cupons de desconto no Zé Delivery.
                                    </p>
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