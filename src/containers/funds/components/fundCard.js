import React, { PureComponent } from 'react';
import { Card, CardBody, Col, UncontrolledTooltip } from 'reactstrap';
import { translate } from 'react-i18next';
import DefaultButtons from './DefaultButtons';

import { NavLink } from 'react-router-dom';
import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ShieldHalfFullIcon from 'mdi-react/ShieldHalfFullIcon';

import ShieldIcon from 'mdi-react/ShieldIcon';
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon';
import SimpleLineChart from './SimpleLineChart';


const dataSolidInvest = [{ "dataDate": "2018-07-31", "navOne": 1229.45, "navAll": 46003104.05 }, { "dataDate": "2018-06-29", "navOne": 1182.63, "navAll": 44251368.96 }, { "dataDate": "2018-06-18", "navOne": 1216.26, "navAll": 50779551.36 }, { "dataDate": "2018-05-31", "navOne": 1199.23, "navAll": 50068617.25 }, { "dataDate": "2018-04-28", "navOne": 1222.13, "navAll": 51024796.38 }, { "dataDate": "2018-03-30", "navOne": 1104.78, "navAll": 46125241.36 }, { "dataDate": "2018-03-19", "navOne": 1115.85, "navAll": 44717412.31 }, { "dataDate": "2018-02-28", "navOne": 1080.42, "navAll": 43297332.93 }];
const dataSolidInvest2 = [{ "dataDate": "2018-08-30", "navOne": 1157.45, "navAll": 27825103.38 }, { "dataDate": "2018-08-29", "navOne": 1142.05, "navAll": 27454909.66 }, { "dataDate": "2018-08-28", "navOne": 1145.87, "navAll": 27546738.91 }, { "dataDate": "2018-08-27", "navOne": 1149.61, "navAll": 27636507.62 }, { "dataDate": "2018-08-24", "navOne": 1157.96, "navAll": 27837293.11 }, { "dataDate": "2018-08-23", "navOne": 1142.38, "navAll": 27462782.33 }, { "dataDate": "2018-08-22", "navOne": 1134.01, "navAll": 27261609.38 }, { "dataDate": "2018-08-21", "navOne": 1128.81, "navAll": 27136653.18 }, { "dataDate": "2018-08-20", "navOne": 1117.55, "navAll": 26865958.35 }, { "dataDate": "2018-08-17", "navOne": 1119.33, "navAll": 26908750.73 }, { "dataDate": "2018-08-16", "navOne": 1112.02, "navAll": 26733056.53 }, { "dataDate": "2018-08-15", "navOne": 1117.98, "navAll": 26876343.08 }, { "dataDate": "2018-08-14", "navOne": 1140.45, "navAll": 27416519.85 }, { "dataDate": "2018-08-13", "navOne": 1120.87, "navAll": 26945782.37 }, { "dataDate": "2018-08-10", "navOne": 1111.77, "navAll": 26726842.97 }, { "dataDate": "2018-08-09", "navOne": 1084.51, "navAll": 26071664.96 }, { "dataDate": "2018-08-08", "navOne": 1103.57, "navAll": 26529922.91 }, { "dataDate": "2018-08-07", "navOne": 1110.70, "navAll": 26701267.63 }, { "dataDate": "2018-08-06", "navOne": 1111.54, "navAll": 26721338.92 }, { "dataDate": "2018-08-03", "navOne": 1107.32, "navAll": 26619905.27 }, { "dataDate": "2018-08-02", "navOne": 1098.61, "navAll": 26410668.38 }, { "dataDate": "2018-08-01", "navOne": 1097.00, "navAll": 26371830.09 }, { "dataDate": "2018-07-31", "navOne": 1104.87, "navAll": 26561057.23 }, { "dataDate": "2018-07-30", "navOne": 1107.51, "navAll": 26624509.13 }, { "dataDate": "2018-07-27", "navOne": 1108.16, "navAll": 26640050.94 }, { "dataDate": "2018-07-26", "navOne": 1109.25, "navAll": 26666434.87 }, { "dataDate": "2018-07-25", "navOne": 1106.35, "navAll": 26596704.78 }, { "dataDate": "2018-07-24", "navOne": 1112.16, "navAll": 26736323.17 }, { "dataDate": "2018-07-23", "navOne": 1116.86, "navAll": 26849372.75 }, { "dataDate": "2018-07-20", "navOne": 1112.90, "navAll": 26754049.38 }];


const data = [
  { dataDate: 'Mon', navOne: 70.23, navAll: 425268156.23, xrp: 85.23, bch: 47.23, eos: 25.23, ltc: 69.23, ada: 52.23, xlm: 78.23, iota: 78.23, neo: 78.23 },
  { name: 'Tue', navOne: 25.5, navAll: 426024660.5, bch: 29.5, eos: 78.5, ltc: 87.5, ada: 98.5, xlm: 28.5, iota: 98.5, neo: 28.5 },
  { name: 'Wed', navOne: 78.45, navAll: 426024660.45, bch: 32.45, eos: 45.45, ltc: 45.45, ada: 78.45, xlm: 25.45, iota: 78.45, neo: 25.45 },
  { name: 'Thu', navOne: 45.2, navAll: 426024660.2, bch: 78.2, eos: 89.2, ltc: 25.2, ada: 48.2, xlm: 98.2, iota: 48.2, neo: 98.2 },
  { name: 'Fri', navOne: 56.61, navAll: 426024660.61, bch: 105.61, eos: 45.61, ltc: 78.61, ada: 88.61, xlm: 86.61, iota: 88.61, neo: 86.61 },
  { name: 'Sat', navOne: 110.6, navAll: 426024660.6, bch: 78.6, eos: 55.6, ltc: 35.6, ada: 78.6, xlm: 32.6, iota: 78.6, neo: 32.6 },
  { name: 'Sun', navOne: 115, navAll: 428128476, bch: 115, eos: 115, ltc: 115, ada: 115, xlm: 115, iota: 115, neo: 115 }
];


class CustomTooltip extends PureComponent {
  render() {
    const { active } = this.props;

    if (active) {
      const { payload } = this.props;
      return (
        <div className="dashboard__total-tooltip">
          <p className="label">Дата : <span className="label">{`${payload[0].payload.dataDate}`}</span></p>
          <p className="label">{`${payload[0].name}`}: <span className="label">{`${payload[0].value}₽`}</span></p>
          <p className="label">СЧА : <span className="label">{`${payload[0].payload.navAll}₽`}</span></p>

        </div>
      );
    }

    return null;
  }
}




class fundCard extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Col className='fund__card'>
        <Card>
          <CardBody>
            <NavLink to={'/fund_page'} onClick={this.props.onClick}>

              <div className='card__title'>
                <h3 className='semibold-text'>{t('ui_elements.funds.basic_heading')}</h3>
                <h4 className='subhead'>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»

                </h4>
              </div>
              <div className='graph'>
                <SimpleLineChart />
              </div>

              <div className="row text-left">

                <Col xs={6} sm={6} md={6} xl={4} >
                  <h4 className='subhead'>Доходность</h4>
                  <h3 className='semibold-text green'>+19.05%</h3>
                </Col>

                <Col xs={6} sm={6} md={6} xl={4} className='text-center risk-column'>
                  <h4 className='subhead'>Риск</h4>
                  <h3 className='semibold-text yellow'><ShieldIcon /><ShieldHalfFullIcon /><ShieldOutlineIcon /></h3>
                </Col>

                <Col xs={6} sm={6} md={6} xl={4} className='text-right' >
                  <h4 className='subhead'>Мин. инвестиция</h4>
                  <h3 className='semibold-text'>10 000₽</h3>
                </Col>

              </div>


            </NavLink>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(fundCard);
