import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import GetFundsList from './components/FundsList';
import FundFilter from './components/fundFilter';
import API from '../../classes/api';
import axios from 'axios'
import moment from 'moment'


export default class FundsList extends PureComponent {

  constructor(props) {
    super();
    this.state = {
    };
  }

  componentWillMount() {

  }



  render() {
    return (
      <Container className='fundsList'>
        <Row>
          <h3 className='page-title'>Каталог фондов</h3>
        </Row>
        <FundFilter />
        <GetFundsList />
      </Container>
    )
  }
}