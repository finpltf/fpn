import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import HeartIcon from 'mdi-react/HeartIcon';
const background = process.env.PUBLIC_URL + '/img/landing/bottom_bg.png';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className='landing__footer'>
        <Container>
          <Row>
            <Col md={12}>
              <p className='landing__footer-text'>Cделано c <HeartIcon /> в <a href='https://specdep.ru'>Инфинитум</a></p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}