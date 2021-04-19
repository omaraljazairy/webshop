import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/footer.css';

const Footer = () => (
  <div className='footer'>
    <Navbar expand='lg'>
      <Nav className='m-auto'>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm='auto'>
              <span>Copyright © 2021 fedal.nl. All Rights Reserved</span>
            </Col>
          </Row>
        </Container>
      </Nav>
    </Navbar>
  </div>
)

export default Footer;