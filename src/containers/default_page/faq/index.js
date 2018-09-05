import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import FAQs from './components/FAQs';

export default class FAQ extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h1 className='page-title'>FAQ</h1>
            <h3 className='page-subhead subhead'>Ответы на часто задаваемые вопросы.</h3>
          </Col>
        </Row>
        <Row>
          <FAQs/>
        </Row>
      </Container>
    )
  }
}