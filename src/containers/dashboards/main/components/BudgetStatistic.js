import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { translate } from 'react-i18next';

const data01 = [{ value: 50, fill: '#4ce1b6' },
{ value: 50, fill: '#eeeeee' }];

class BudgetStatistic extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Col md={12} lg={12} xl={12}>
        <div className='dashboard__stat dashboard__stat--budget'>
          <div className='dashboard__stat-main'>
            <hr className='h15' />
            <p className='dashboard__stat-main-title'>Сумма инвестиций</p>
            <p className='dashboard__stat-main-number'>125,321₽</p>
            <hr />
          </div>
        </div>
      </Col>
    )
  }
}

export default translate('common')(BudgetStatistic);
