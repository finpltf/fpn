import React, {PureComponent} from 'react';
import {PieChart, Pie, ResponsiveContainer} from 'recharts';
import {Card, CardBody, Col} from 'reactstrap';
import FlashIcon from 'mdi-react/FlashIcon';
import {translate} from 'react-i18next';

const data = [{value: 360, fill: '#f6da6e'},
  {value: 140, fill: '#eeeeee'}];

class CaloriesBurn extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col md={12} xl={3} lg={6} sm={12} xs={12}>
        <Card>
          <CardBody className='dashboard__health-chart-card'>
            <div className='card__title'>
              <h5 className='bold-text'>{t('dashboard_fitness.calories_burn')}</h5>
            </div>
            <div className='dashboard__health-chart'>
              <ResponsiveContainer height={180}>
                <PieChart>
                  <Pie data={data} dataKey='value' cy={85} innerRadius={80} outerRadius={90}/>
                </PieChart>
              </ResponsiveContainer>
              <div className='dashboard__health-chart-info'>
                <FlashIcon style={{fill: '#f6da6e'}}/>
                <p className='dashboard__health-chart-number'>360</p>
                <p className='dashboard__health-chart-units'>kKal</p>
              </div>
            </div>
            <p className='dashboard__goal'>Goal: 500 kKal</p>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(CaloriesBurn);
