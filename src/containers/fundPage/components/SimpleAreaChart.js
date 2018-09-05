import React, { PureComponent } from 'react';
import { Col, Row } from 'reactstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { translate } from 'react-i18next';

const nav = [
  {
    "dataDate": "2018-08-01",
    "navOne": 1097,
    "navAll": 26371830.09
  },
  {
    "dataDate": "2018-08-02",
    "navOne": 1098.61,
    "navAll": 26410668.38
  },
  {
    "dataDate": "2018-08-03",
    "navOne": 1107.32,
    "navAll": 26619905.27
  },
  {
    "dataDate": "2018-08-06",
    "navOne": 1111.54,
    "navAll": 26721338.92
  },
  {
    "dataDate": "2018-08-07",
    "navOne": 1110.7,
    "navAll": 26701267.63
  },
  {
    "dataDate": "2018-08-08",
    "navOne": 1103.57,
    "navAll": 26529922.91
  },
  {
    "dataDate": "2018-08-09",
    "navOne": 1084.51,
    "navAll": 26071664.96
  },
  {
    "dataDate": "2018-08-10",
    "navOne": 1111.77,
    "navAll": 26726842.97
  },
  {
    "dataDate": "2018-08-13",
    "navOne": 1120.87,
    "navAll": 26945782.37
  },
  {
    "dataDate": "2018-08-14",
    "navOne": 1140.45,
    "navAll": 27416519.85
  },
  {
    "dataDate": "2018-08-15",
    "navOne": 1117.98,
    "navAll": 26876343.08
  },
  {
    "dataDate": "2018-08-16",
    "navOne": 1112.02,
    "navAll": 26733056.53
  },
  {
    "dataDate": "2018-08-17",
    "navOne": 1119.33,
    "navAll": 26908750.73
  },
  {
    "dataDate": "2018-08-20",
    "navOne": 1117.55,
    "navAll": 26865958.35
  },
  {
    "dataDate": "2018-08-21",
    "navOne": 1128.81,
    "navAll": 27136653.18
  },
  {
    "dataDate": "2018-08-22",
    "navOne": 1134.01,
    "navAll": 27261609.38
  },
  {
    "dataDate": "2018-08-23",
    "navOne": 1142.38,
    "navAll": 27462782.33
  },
  {
    "dataDate": "2018-08-24",
    "navOne": 1157.96,
    "navAll": 27837293.11
  },
  {
    "dataDate": "2018-08-27",
    "navOne": 1149.61,
    "navAll": 27636507.62
  },
  {
    "dataDate": "2018-08-28",
    "navOne": 1145.87,
    "navAll": 27546738.91
  },
  {
    "dataDate": "2018-08-29",
    "navOne": 1142.05,
    "navAll": 27454909.66
  },
  {
    "dataDate": "2018-08-30",
    "navOne": 1157.45,
    "navAll": 27825103.38
  },
  {
    "dataDate": "2018-08-31",
    "navOne": 1165.26,
    "navAll": 28012816.71
  },
  {
    "dataDate": "2018-09-03",
    "navOne": 1161.48,
    "navAll": 27921901.83
  }
];

const arr = nav.reverse();


class SimpleAreaChart extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <div className='card__title'>
            <h5>Ещё какая-то херня</h5>
          </div>
          <ResponsiveContainer height={250}>
            <AreaChart data={arr}
              syncId="chart"
              margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
              <XAxis reversed={true} hide={true} padding={{ top: 0, bottom: 0, left: 10, right: 10 }} dataKey='dataDate' />
              <YAxis minTickGap={50} hide={true} padding={{ top: 20, bottom: 30, left: 10, right: 10 }} domain={[dataMin => (Math.abs(dataMin)), dataMax => (Math.abs(dataMax))]} />
              <CartesianGrid strokeDasharray='3 3' />
              <Tooltip />
              <Area activeDot={{ r: 5 }} type='monotone' dataKey='navAll' stroke='#ee1a2d' fill='#dddddd' />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    )
  }
}

export default translate('common')(SimpleAreaChart);
