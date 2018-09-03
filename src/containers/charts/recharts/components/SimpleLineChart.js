import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {translate} from 'react-i18next';

class CustomTooltip extends PureComponent {
  render() {
    const {active} = this.props;

    if (active) {
      const {payload} = this.props;
      return (
        <div className="dashboard__total-tooltip">
          <p className="label">{`${payload[0].value}₽`}</p>
        </div>
      );
    }

    return null;
  }
}

const data = [
  {name: '01.08.2018', uv: 1558},
  {name: '02.08.2018', uv: 1580},
  {name: '03.08.2018', uv: 1257},
  {name: '04.08.2018', uv: 1585},
  {name: '05.08.2018', uv: 1591},
  {name: '06.08.2018', uv: 1587},
  {name: '07.08.2018', uv: 1599},
  {name: '08.08.2018', uv: 1650},
];

class SimpleLineChart extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('charts.recharts.simple_line_chart')}</h5>
            </div>
            <ResponsiveContainer height={150}>
              <LineChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray='7 7'/>
                <Tooltip content={<CustomTooltip/>}/>                
                <Line type='monotone' dataKey='uv' stroke='#ee1a2d' activeDot={{r: 8}}/>                
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(SimpleLineChart);
