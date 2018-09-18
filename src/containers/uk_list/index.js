import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import GetUkList from './components/UkList';

export default class UkList extends PureComponent {
  render() {
    return (
      <Container className='UkList'>
        <Row>
          <h1 className='page-title'>Управляющие компании</h1>

          <GetUkList />
        </Row>
      </Container>
    )
  }
}