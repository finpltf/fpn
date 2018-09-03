import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {PieChart, Pie} from 'recharts';
import {translate} from 'react-i18next';

const data01 = [{value: 50, fill: '#4ce1b6'},
  {value: 50, fill: '#eeeeee'}];

class BudgetStatistic extends PureComponent {
  render() {
    const {t} = this.props;

    return (
    <Col md={12} lg={6} xl={4}>
      <Card>
       <CardBody>
        <div className='dashboard__stat dashboard__stat--budget'>
          <div className='dashboard__stat-main'>
            <p className='dashboard__stat-main-title'>Сумма инвестиций</p>
            <p className='dashboard__stat-main-number'>125,321₽</p>
            <hr/>
          </div>
          <div className='dashboard__stat-chart'>
            <PieChart height={120} width={120}>
              <Pie data={data01} dataKey='value' cx={55} cy={55} innerRadius={50} outerRadius={60}/>
            </PieChart>
            <p className='dashboard__stat-label'>₽</p>
          </div>
          <div className='dashboard__stat-data'>
            <div>
              <p className='dashboard__stat-data-number'>125,321₽</p>
              <p style={{color: '#ff4861'}}>Инвестиции</p>
            </div>
            <div>
              <p className='dashboard__stat-data-number'>135,321₽</p>
              <p style={{color: '#4ce1b6'}}>Доход</p>
            </div>
          </div>
        </div>
        </CardBody>
      </Card>
    </Col>
    )
  }
}

export default translate('common')(BudgetStatistic);
