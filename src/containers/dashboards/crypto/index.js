import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import BTC from './components/BTC';
import ETH from './components/ETH';
import BCH from './components/BCH';
import XRP from './components/XRP';
import TradeHistory from './components/TradeHistory';
import BtcEth from './components/BtcEth';
import ABTestingAnalytics from './components/ABTestingAnalytics';
import CryptotrendsToday from './components/CryptotrendsToday';
import TopTen from './components/TopTen';
import PlaceOrder from './components/PlaceOrder';

import MyIncomes from './components/MyIncomes';
import NavDay from './components/NavDay';
import NavMounth from './components/NavMounth';
import NavYear from './components/NavYear';
import NavTotal from './components/NavTotal';
import FundsNavChart from './components/FundsNavChart';
import MyFundCard from './components/MyFundCard';


import { translate } from 'react-i18next';

class CryptoDashboard extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Container className='dashboard'>


        <Row>
          <Col md={12}>
            <h3 className='page-title'>Доходность</h3>
          </Col>
        </Row>

        <Row>

          <Col lg={6}>
            <MyIncomes />
          </Col>

          <Col lg={6}>
            <FundsNavChart />
          </Col>



        </Row>

        <Row>

        </Row>

        <Row>
          <Col md={12}>
            <h3 className='page-title'>Ваш портфель</h3>
          </Col>
        </Row>

        <Row>
          <MyFundCard />
          <MyFundCard />
          <MyFundCard />
          <MyFundCard />
        </Row>
      </Container>
    )
  }
}

export default translate('common')(CryptoDashboard);
