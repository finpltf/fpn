import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {PieChart, Pie, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {translate} from 'react-i18next';

const data01 = [{name: '«Арсагера - КР 1.55»', value: 20432, fill: '#4ce1b6'},
  {name: '«Алёнка – Капитал»', value: 15432, fill: '#70bbfd'},
  {name: '«Арсагера - КР 1.55»', value: 12934, fill: '#f6da6e'},
  {name: '«Солид - Индекс МосБиржи»', value: 9934, fill: '#ff4861'}];

const style = {
  left: 0,
  width: 150,
  lineHeight: '24px'
};

const renderLegend = (props) => {
  const {payload} = props;
  return (
    <ul className='dashboard__chart-legend'>
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`}><span style={{backgroundColor: entry.color}}/>{entry.value}</li>
        ))
      }
    </ul>
  );
};

class CryptotrendsToday extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Panel lg={8} xl={8} xs={12} title={t('dashboard_crypto.cryptotrends_today')}
             subhead='Top selling items statistic by last month'>
        <ResponsiveContainer className='dashboard__chart-pie dashboard__chart-pie--crypto' height={400}>
          <PieChart className='dashboard__chart-pie-container'>
            <Tooltip formatter={(value) => ('$' + value.toFixed(2))}/>
            <Pie data={data01} dataKey='value' cy={175} innerRadius={110} outerRadius={140}
                 label={(value) => (value.value.toFixed(2) + '₽')}/>
            <Legend layout='vertical' verticalAlign='bottom' wrapperStyle={style} content={renderLegend}/>
          </PieChart>
        </ResponsiveContainer>
      </Panel>
    )
  }
}

export default translate('common')(CryptotrendsToday);
