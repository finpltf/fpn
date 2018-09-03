import React, {PureComponent} from 'react';
import {PieChart, Pie, Tooltip, Legend} from 'recharts';
import {Button} from 'reactstrap';
import LoadingIcon from 'mdi-react/LoadingIcon';

const data01 = [
  {name: 'Денежные средства', value: 19, fill: '#b0de09'},
  {name: 'Дебиторская задолженность', value: 11, fill: '#ee1a2d'},
  {name: 'Акции российских эмитентов', value: 70, fill: '#fcd202'}
];

const style = {
  top: 95,
  left: 320,
  width: 240,
  lineHeight: '24px'
};


class CustomTooltip extends PureComponent {
  render() {
    const {active} = this.props;

    if (active) {
      const {payload} = this.props;
      return (
        <div className="dashboard__total-tooltip">
          <p className="label">
          {`${payload[0].name}`}: {`${payload[0].value}%`}</p>
        </div>
      );
    }

    return null;
  }
}


export default class Statistics extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      update: false,
      data1: data01      
    };
        
  }
  
  
  
  render() {
    return (
      <div className='FundPage__statistics'>
        {this.state.update ? <div className='FundPage__statistics-refresh'><LoadingIcon/></div> : ''}        
        <div className='FundPage__statistic'>
          <p className='FundPage__statistic-title'>Структура активов</p>
          <PieChart width={360} height={350}>
          <Tooltip content={<CustomTooltip/>}/>
            <Pie data={this.state.data1} dataKey='value' cx={140} cy={135} innerRadius={80} outerRadius={110} label/>
            <Legend layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
          </PieChart>
        </div>
      </div>
    )
  }
}