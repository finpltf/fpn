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
      todayprice: {},
      yesterdayprice: {},
      twodaysprice: {},
      threedaysprice: {},
      fourdaysprice: {}
    };
  }

  saveStateToLocalStorage = () => {
    localStorage.setItem('history-state', JSON.stringify(this.state));
  };

  restoreStateFromLocalStorage = () => {
    const state = JSON.parse(localStorage.getItem('today-state'));
    console.log(state);
    this.setState(state);
  };

  getPriceForDay = (daysCount = 0, key) => {
    const time = moment().subtract(daysCount, 'days').unix();
    axios.all([this.getETHPrices(time), this.getBTCPrices(time), this.getLTCPrices(time)])
      .then(axios.spread((eth, btc, ltc) => {
        /** Have clear names for your variables, what is f supposed to be? **/
        let f = {
          date: moment.unix(time).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        };
        this.setState({
          [key]: f
        }, this.saveStateToLocalStorage);
      }));
  };

  getCurrencyPrice = (date, currency) =>
    axios.get(`https://my.platform.finance/api/v1/funds`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );

  getETHPrices = (date) => this.getCurrencyPrice(date, 'ETH');
  getBTCPrices = (date) => this.getCurrencyPrice(date, 'BTC');
  getLTCPrices = (date) => this.getCurrencyPrice(date, 'LTC');

  componentWillMount() {

    if (!navigator.onLine) {
      this.restoreStateFromLocalStorage();
    }
    const days = ['today', 'yesterday', 'twodays', 'threedays', 'fourdays'];
    for (const day in days) {
      this.getPriceForDay(day, `${days[day]}price`);
    }

  }



  render() {
    const { todayprice, yesterdayprice, twodaysprice, threedaysprice, fourdaysprice } = this.state;
    console.log(this.state);

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