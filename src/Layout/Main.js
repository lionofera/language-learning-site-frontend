import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Sidebar from '../Pages/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4">
                      <h2>Course category</h2>
                      <Sidebar></Sidebar>
                    </Col>

                    <Col lg="8">
                      <h2>Course cards</h2>
                      <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;