import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../assets/icone role.png';
import Img2 from '../../assets/icone musicaaovivo.png';
import Img3 from '../../assets/iconemusicamb.png';

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
                    <div>
                        <div>
                            <img src={Img1} alt="Brinde" />
                        </div>
                        <strong style={{color: '#FFC500'}}>Resenha com os amigos</strong>
                        <p>Com a Maria Rolê você marcar aquela famigerada resenha com seus amigos via chat, a Maria te dá sugestões de ambiente para você aproveitar a para curtir uma boa cerveja gelada, na companhia de quem você gosta. </p>
                    </div>
                    <div>
                        <div>
                            <img src={Img2} alt="Violão" />    
                        </div>
                        <strong style={{color: '#FFC500'}}>Música ao vivo</strong>
                        <p>Com ela você também pode escutar música ao vivo nos melhores dias e oportunidades. Ela seleciona o evento baseando-se em seu interesse musical.</p>
                    </div>
                    <div>
                        <div>
                            <img src={Img3} alt="Notas músicais" />
                        </div>
                        <strong style={{color: '#FFC500'}}>Som ambiente </strong>
                        <p>A Maria Rolê também faz indicações dos bares por tipo de som ambiente, para você que prefere uma saída mais intimista.</p>
                    </div>
                </div>

            </Cards>

            <FooterDefault />
        </>
    );
}

export default Home;