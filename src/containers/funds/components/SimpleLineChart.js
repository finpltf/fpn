import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { translate } from 'react-i18next';
import Moment from 'react-moment';

class CustomTooltip extends PureComponent {
  render() {
    const { active } = this.props;

    if (active) {
      const { payload } = this.props;
      return (
        <div className="dashboard__total-tooltip">
          <p className="label">РСП: {`${payload[0].value}₽`}</p>
          <p className="label">СЧА: {`${payload[0].payload.navAll}₽`}</p>
          <p className="label"> Дата: <Moment format="DD.MM.YYYY">
            {`${payload[0].payload.dataDate}`}
          </Moment>
          </p>
        </div>
      );
    }

    return null;
  }
}

const data = [
  { name: '01.08.2018', uv: 1558 },
  { name: '02.08.2018', uv: 1580 },
  { name: '03.08.2018', uv: 1257 },
  { name: '04.08.2018', uv: 1585 },
  { name: '05.08.2018', uv: 1591 },
  { name: '06.08.2018', uv: 1587 },
  { name: '07.08.2018', uv: 1599 },
  { name: '08.08.2018', uv: 1650 },
];

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

const arr = nav;

class SimpleLineChart extends PureComponent {
  render() {
    const { t } = this.props;

    return (
        <ResponsiveContainer height={80}>
          <AreaChart data={arr}
            margin={{ top: 15, right: -10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0' stopColor='#00f4b0' stopOpacity={0.5} />
                <stop offset='100%' stopColor='#00f4b0' stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis padding={{ top: 20, bottom: 10, left: 0, right: 10 }} hide={true} tickFormatter={value => `${value}₽`} axisLine={false} tickLine={false} domain={[dataMin => (Math.abs(dataMin)), dataMax => (Math.abs(dataMax))]} />
            <XAxis dataKey='name' padding={{ top: 0, bottom: 0, left: 0, right: 0 }} hide={true} minTickGap={150} tickFormatter={value => `${value}`} axisLine={true} tickLine={false} domain={[dataMin => (Math.abs(dataMin)), dataMax => (Math.abs(dataMax))]} />
            <Area name='Доходность' type='monotone' dataKey='navOne' stroke='#00f4b0' strokeWidth={2} fill='url(#colorUv)' fillOpacity={0.75} />
            <Tooltip content={<CustomTooltip />} className='dashboard__total-tooltip' />
          </AreaChart>
        </ResponsiveContainer>
    )
  }
}

export default translate('common')(SimpleLineChart);
