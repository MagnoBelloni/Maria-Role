import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Main } from './styles';

const Point: React.FC = () =>{
    return(
        <>
            <Main>
            <Card className="text-center">
                <Card.Header>Bar Brahma</Card.Header>
                <Card.Body>
                    <Card.Title>São Paulo, SP</Card.Title>
                    <Card.Text>
                    <p>Reduto de intelectuais, músicos e políticos nas décadas de 50 e 60, é famoso pelo chope, petiscos e música.</p>
                    
                    <p><b>Endereço:</b> Av. São João, 677 - Centro Histórico de São Paulo, São Paulo - SP, 01036-000</p>
                    <p><b>Telefone:</b> (11) 94827-0528</p>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/tf-lab/image/upload/w_656,h_368,c_fill,g_auto:subject,q_auto,f_auto/restaurant/d190794b-8696-4372-8c13-ce96090bba22/2e197514-db2a-4eb8-9a76-71f673182481.jpg"
                            alt="First slide"
                            sizes="600x600"
                            />
                            <Carousel.Caption>
                            <h3>Hall de Entrada</h3>
                            <p>Com muitas opções de entrada.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://media-cdn.tripadvisor.com/media/photo-s/12/bf/6c/e7/boulevard.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Restaurante</h3>
                            <p>Longo cardápio.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.baressp.com.br/eventos/fotos/brahma_22012015132013.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Shows ao vivo</h3>
                            <p>Vários artistas e bandas se apresentam semanalmente.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Card.Text>
                    <Button variant="primary">Viste</Button>
                    <Link to="/Maria-Role/points">
                    <Button variant="primary">Voltar</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">2 dias atrás</Card.Footer>
            </Card>
           
            </Main>
        </>
    );
}

export default Point;