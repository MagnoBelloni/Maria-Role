import React from 'react';
import { Link } from 'react-router-dom';

import { GoStar } from 'react-icons/go';
import { Card, Button } from 'react-bootstrap';

import NavbarDefault from '../../pages/Navbar/index';
import FooterDefault from '../../pages/Footer/index';

import { Main } from './styles';

const Points: React.FC = () => {
    function renderCard() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                <Card.Body>
                    <Card.Title>Bar Itapeva - 4,7<GoStar color="yellow"/></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi, nulla commodi dolorem soluta velit. Suscipit adipisci incidunt necessitatibus omnis sint ad amet, molestias ducimus rem mollitia! Repudiandae, quos ad.
                    </Card.Text>
                    <Link to="/Maria-Role/point">
                        <Button className="knowmore" variant="primary">Saiba Mais</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }

    let cards = []
    for (let i = 0; i < 5; i++) {
        cards.push(i)
    }

    return (
        <>
            <NavbarDefault />

            <Main>
                <div className="colunas d-flex justify-content-around">
                    <Button variant="outline-warning">Adriática</Button>{' '}
                    <Button variant="outline-warning">Antarctica</Button>{' '}
                    <Button variant="outline-warning">Bohemia</Button>{' '}
                    <Button variant="outline-warning">Brahma</Button>{' '}
                    <Button variant="outline-warning">Budwaiser</Button>{' '}
                    <Button variant="outline-warning">Caracu</Button>{' '}
                    <Button variant="outline-warning">Legítima</Button>{' '}
                    <Button variant="outline-warning">Skol</Button>{' '}
                </div>
                <div className="colunas d-flex justify-content-around">
                    {cards.map(renderCard)}
                </div>

                <div className="colunas d-flex justify-content-around">
                    {cards.map(renderCard)}
                </div>
            </Main>

            <FooterDefault />
        </>
    );
};

export default Points;