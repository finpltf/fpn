import React, { PureComponent } from 'react';
import { AreaChart, Area, YAxis, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { translate } from 'react-i18next';
import { Card, CardBody, Row, Col } from 'reactstrap';

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
      <Card lg={12} xl={12} md={12} xs={12} className='no_padding'>
        <CardBody>


          <Row className="my_incomes" >
            <Col>
              <h4 className='subhead'>Инвестиции</h4>
              <h3 className='semibold-text'>148 565₽</h3>
            </Col>
            <Col className='text-right'>

              <h4 className='subhead'>Доходность</h4>
              <h3 className='semibold-text green'>+11,85%</h3>
            </Col>
          </Row>
          <ResponsiveContainer height={150}>
            <AreaChart data={data}
              margin={{ top: 15, right: -10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0' stopColor='#4ce1b6' stopOpacity={0.4} />
                  <stop offset='100%' stopColor='#4ce1b6' stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <YAxis padding={{ top: 20, bottom: 0, left: 0, right: 10 }} hide={true} tickFormatter={value => `${value}₽`} axisLine={false} tickLine={false} domain={[dataMin => (Math.abs(dataMin) - 50), dataMax => (Math.abs(dataMax) - 100)]} />
              <XAxis dataKey='name' padding={{ top: 20, bottom: 20, left: 10, right: 10 }} hide={true} minTickGap={150} tickFormatter={value => `${value}`} axisLine={true} tickLine={false} domain={[dataMin => (Math.abs(dataMin) - 100), dataMax => (Math.abs(dataMax) + 100)]} />
              <Area name='Доходность' type='monotone' dataKey='nav' stroke='#4ce1b6' strokeWidth={2} fill='url(#colorUv)' fillOpacity={0.75} />
              <Tooltip className='dashboard__total-tooltip' />
            </AreaChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    )
  }
}

export default translate('common')(MyIncomes);
