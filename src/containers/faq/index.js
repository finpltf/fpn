import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import FAQs from './components/FAQs';

export default class FAQ extends PureComponent {
  render() {
    return (
      <Container className='faqList'>
        <Row>
          <Col md={12}>
            <h1 className='page-title'>Вопросы и ответы</h1>
          </Col>
        </Row>
        <Row>
          <FAQs />
        </Row>
      </Container>
    )
  }
}