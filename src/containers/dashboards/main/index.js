import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

import MyIncomes from './components/MyIncomes';
import NavDay from './components/NavDay';
import NavMounth from './components/NavMounth';
import NavYear from './components/NavYear';
import NavTotal from './components/NavTotal';
import FundsNavChart from './components/FundsNavChart';
import MyFundCard from './components/MyFundCard';
import AddFundCard from './components/AddFundCard';


import { translate } from 'react-i18next';



class Dashboard extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Container className='dashboard'>

        <Row>
          <Col md={12}>
            <h1 className='page-title'>Ваш портфель</h1>
          </Col>





          <Col lg={7}>
            <Row><NavDay /></Row>
            <Row><NavMounth /></Row>
            <Row><NavTotal /></Row>
          </Col>




          <hr className='h30 invis' />
          <Col md={12}>
            <h3 className='page-title'>Фонды в портфеле</h3>
          </Col>

          <MyFundCard />
          <MyFundCard />
          <MyFundCard />
          <MyFundCard />
          <MyFundCard />
          <AddFundCard />
        </Row>
      </Container>
    )
  }
}

export default translate('common')(Dashboard);
