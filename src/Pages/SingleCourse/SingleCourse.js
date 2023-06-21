import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const SingleCourse = ({c}) => {

    const {name, img, level, rating } =c;
    return (
        <Container>
            <Row xs={1} md={2} className="g-6">
                <Col>
                    <Card className='m-3'>
                        <Card.Img variant="top" src={img} alt='' />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           
        </Container>
    );
};

export default SingleCourse;