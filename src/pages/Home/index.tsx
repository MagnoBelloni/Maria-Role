import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import Logo from '../../assets/logo.png';
import Img1 from '../../assets/delivery-man.png';
import Img2 from '../../assets/welcome_how_it_works_02.png';
import Img3 from '../../assets/double_cellphone_greeting.png';

import { Form, Main, Cards } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <Navbar fixed="top" variant="dark">
                <Container>
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
                </Container>
            </Navbar>

            <Main>
                <Form action="">
                    <input placeholder="Digite o CEP para buscar eventos" />
                    <button type="submit">Pesquisar</button>
                </Form>
            </Main>

            <Cards>
                <h2>Como funciona o Maria Rolê?</h2>
                <br />
                <div>
                    <a href="teste">
                        <img src={Img1} alt="" />
                        <strong>Lorem Ipsun</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe quo, perspiciatis quidem iure architecto voluptatem consequuntur quam laborum dolore animi inventore sed libero numquam unde, voluptas minima vel tenetur?</p>
                    </a>
                    <a href="teste">
                        <img src={Img2} alt="" />
                        <strong>Lorem Ipsun</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe quo, perspiciatis quidem iure architecto voluptatem consequuntur quam laborum dolore animi inventore sed libero numquam unde, voluptas minima vel tenetur?</p>
                    </a>
                    <a href="teste">
                        <img src={Img3} alt="" />
                        <strong>Lorem Ipsun</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe quo, perspiciatis quidem iure architecto voluptatem consequuntur quam laborum dolore animi inventore sed libero numquam unde, voluptas minima vel tenetur?</p>
                    </a>
                </div>

            </Cards>

            <div className="fixed-bottom">
                <Navbar>
                    <Container>
                        @ 2020 Maria Role - Todos os direitos reservados.
                    </Container>
                </Navbar>
            </div>


        </>
    );
}

export default Home;