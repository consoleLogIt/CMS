import React from 'react';
import {Navbar} from '../';
import { Container, Row, Col } from "react-bootstrap";


function Homepage(props) {
    return (
        <div>
            <Navbar/>
            <Container>
                <Row>
                    <Col>DASHBOARD</Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default Homepage;