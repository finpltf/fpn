import React, { PureComponent } from 'react';
import { AreaChart, Area, YAxis, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { translate } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';

const data = [
  { name: 'Январь', nav: 4380, navp: 4.35 },
  { name: 'Февраль', nav: 4380, navp: 4.35 },
  { name: 'Март', nav: 4380, navp: 4.35 },
  { name: 'Апрель', nav: 4980, navp: 7.35 },
  { name: 'Май', nav: 4880, navp: 6.35 },
  { name: 'Июнь', nav: 4680, navp: 4.44 },
  { name: 'Июль', nav: 4380, navp: 4.35 },
  { name: 'Август', nav: 4380, navp: 4.35 },
  { name: 'Сентябрь', nav: 4380, navp: 4.35 },
  { name: 'Октябрь', nav: 4180, navp: 3.35 },
  { name: 'Ноябрь', nav: 4380, navp: 4.35 },
  { name: 'Декабрь', nav: 4580, navp: 6.65 },
];

class MyIncomes extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Card lg={12} xl={12} md={12} xs={12} >
        <CardBody>

          <div className='dashboard__weight-stats'>
            <div className='dashboard__weight-stat'>
              <p className='dashboard__weight-stat-title'>Инвестиции</p>
              <p className='dashboard__weight-stat-value dashboard__weight-stat-value--control'>148 000₽</p>
            </div>
            <div className='dashboard__weight-stat'>
              <p className='dashboard__weight-stat-title'>Доходность</p>
              <p className='dashboard__weight-stat-value dashboard__weight-stat-value--total'>+11.85</p>
            </div>
          </div>
          <ResponsiveContainer height={180}>
            <AreaChart data={data}
              margin={{ top: 0, right: 0, left: -5, bottom: 0 }}>
              <defs>
                <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0' stopColor='#4ce1b6' stopOpacity={0.4} />
                  <stop offset='100%' stopColor='#4ce1b6' stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <YAxis padding={{ top: 20, bottom: 20, left: 0, right: 10 }} hide={true} tickFormatter={value => `${value}₽`} axisLine={false} tickLine={false} domain={[dataMin => (Math.abs(dataMin) - 50), dataMax => (Math.abs(dataMax) - 100)]} />
              <XAxis dataKey='name' padding={{ top: 20, bottom: 20, left: 10, right: 10 }} hide={false} minTickGap={1} tickFormatter={value => `${value}`} axisLine={true} tickLine={false} domain={[dataMin => (Math.abs(dataMin) - 50), dataMax => (Math.abs(dataMax) - 100)]} />
              <Area name='Доходность' type='monotone' dataKey='nav' stroke='#4ce1b6' strokeWidth={3} fill='url(#colorUv)' fillOpacity={0.75} />
              <Tooltip className='dashboard__total-tooltip' />
            </AreaChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    )
  }
}

export default translate('common')(MyIncomes);
