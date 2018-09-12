import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import SearchHere from './components/SearchHere';
import FundFilter from './components/fundFilter';

export default class FundsList extends PureComponent {
  render() {
    return (
      <Container className='fundsList'>
        <Row>
          <h3 className='page-title'>Каталог фондов</h3>
        </Row>
        <FundFilter />
        <Row>
          <SearchHere />
        </Row>
      </Container>
    )
  }
}