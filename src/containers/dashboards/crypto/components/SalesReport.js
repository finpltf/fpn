import React, { PureComponent } from 'react';
import Panel from '../../../../components/Panel';
import BudgetStatistic from './BudgetStatistic';
import { translate } from 'react-i18next';

class SalesReport extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Panel md={12} lg={7} xl={5} sm={12} xs={12} title={"Доходность"} >
        <div className='dashboard__sales-report'>
          <div className='progress-wrap progress-wrap--small'>
            <p className='dashboard__sales-report-title'>Сегодня</p>
            <p className='dashboard__sales-report-now'>-298,92₽</p>
            <p className='dashboard__sales-report-plan red'>-1.04%</p>
          </div>
          <div className='progress-wrap progress-wrap--small progress-wrap--pink'>
            <p className='dashboard__sales-report-title'>Неделя</p>
            <p className='dashboard__sales-report-now'>+1423,01₽</p>
            <p className='dashboard__sales-report-plan green'>+4.95%</p>
          </div>
          <div className='progress-wrap progress-wrap--small progress-wrap--pink'>
            <p className='dashboard__sales-report-title'>Месяц</p>
            <p className='dashboard__sales-report-now'>+44321,74₽</p>
            <p className='dashboard__sales-report-plan green'>+11.23%</p>
          </div>
        </div>
        <BudgetStatistic />
      </ Panel>
    )
  }
}

export default translate('common')(SalesReport);
