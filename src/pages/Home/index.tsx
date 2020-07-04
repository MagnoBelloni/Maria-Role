import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../assets/delivery-man.png';
import Img2 from '../../assets/welcome_how_it_works_02.png';
import Img3 from '../../assets/double_cellphone_greeting.png';

import { Form, Main, Cards } from './styles';

import NavbarDefault from '../../pages/Navbar/index';
import FooterDefault from '../../pages/Footer/index';

const Home: React.FC = () => {
    return (
        <>
            <NavbarDefault />
            <Main>
                <Form action="">
                    <input placeholder="Digite o CEP para buscar eventos" />
                    <Link to="/Maria-Role/points">
                        <button type="submit">Pesquisar</button>
                    </Link>
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

            <FooterDefault />
        </>
    );
}

export default Home;