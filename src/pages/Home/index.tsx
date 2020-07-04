import React from 'react';
import { Link } from 'react-router-dom';
import viaCep from '../../services/viaCep';

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
                        <strong>Resenha com os amigos</strong>
                        <p>Com a Maria Rolê você marcar aquela famigerada resenha com seus amigos via chat, a Maria te dá sugestões de ambiente para você aproveitar a para curtir uma boa cerveja gelada, na companhia de quem você gosta. </p>
                    </a>
                    <a href="teste">
                        <img src={Img2} alt="" />
                        <strong>Música ao vivo</strong>
                        <p>Com ela você também pode escutar música ao vivo nos melhores dias e oportunidades. Ela seleciona o evento baseando-se em seu interesse musical.</p>
                    </a>
                    <a href="teste">
                        <img src={Img3} alt="" />
                        <strong>Som ambiente </strong>
                        <p>A Maria Rolê também faz indicações dos bares por tipo de som ambiente, para você que prefere uma saída mais intimista.</p>
                    </a>
                </div>

            </Cards>

            <FooterDefault />
        </>
    );
}

export default Home;