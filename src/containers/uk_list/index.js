import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import GetUkList from './components/UkList';

export default class UkList extends PureComponent {
  render() {
    return (
      <Container className='UkList'>
        <Row>
          <h3 className='page-title'>Управляющие компании</h3>
        </Row>
        <Row>
          <GetUkList />
        </Row>
      </Container>
    )
  }
}