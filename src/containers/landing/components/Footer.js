import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';

const background = process.env.PUBLIC_URL + '/img/landing/bottom_bg.png';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className='landing__footer'>
        <Container>
          <Row>
            <Col md={12}>
              <p className='landing__footer-text'>С любовью сделано в <a href='https://specdep.ru'>Инфинитум</a></p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}