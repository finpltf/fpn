import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {AreaChart, Area,LineChart, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {translate} from 'react-i18next';

const data = [
  {name: 'Январь', a: 868, b: 1506, c: 1700},
  {name: 'Февраль', a: 1397, b: 1358, c: 1658},
  {name: 'Март', a: 1480, b: 1589, c: 1358},
  {name: 'Апрель', a: 1520, b: 1600, c: 1195},
  {name: 'Май', a: 1520, b: 1690, c: 1258},
  {name: 'Июнь', a: 1550, b: 1650, c: 1458},
  {name: 'Июль', a: 1650, b: 1700, c: 1355},
  {name: 'Август', a: 1700, b: 1740, c: 1452},
  {name: 'Сентябрь', a: 1630, b: 1710, c: 1587},
  {name: 'Октябрь', a: 1590, b: 1720, c: 1552},
  {name: 'Ноябрь', a: 1680, b: 1685, c: 1625},
  {name: 'Декабрь', a: 1870, b: 1650, c: 1685}
];


const data2 = [{
  "dataDate": "2018-08-30",
  "navOne": 1157.45,
  "navAll": 27825103.38
}, {
  "dataDate": "2018-08-29",
  "navOne": 1142.05,
  "navAll": 27454909.66
}, {
  "dataDate": "2018-08-28",
  "navOne": 1145.87,
  "navAll": 27546738.91
}, {
  "dataDate": "2018-08-27",
  "navOne": 1149.61,
  "navAll": 27636507.62
}, {
  "dataDate": "2018-08-24",
  "navOne": 1157.96,
  "navAll": 27837293.11
}, {
  "dataDate": "2018-08-23",
  "navOne": 1142.38,
  "navAll": 27462782.33
}, {
  "dataDate": "2018-08-22",
  "navOne": 1134.01,
  "navAll": 27261609.38
}, {
  "dataDate": "2018-08-21",
  "navOne": 1128.81,
  "navAll": 27136653.18
}, {
  "dataDate": "2018-08-20",
  "navOne": 1117.55,
  "navAll": 26865958.35
}, {
  "dataDate": "2018-08-17",
  "navOne": 1119.33,
  "navAll": 26908750.73
}, {
  "dataDate": "2018-08-16",
  "navOne": 1112.02,
  "navAll": 26733056.53
}, {
  "dataDate": "2018-08-15",
  "navOne": 1117.98,
  "navAll": 26876343.08
}, {
  "dataDate": "2018-08-14",
  "navOne": 1140.45,
  "navAll": 27416519.85
}, {
  "dataDate": "2018-08-13",
  "navOne": 1120.87,
  "navAll": 26945782.37
}, {
  "dataDate": "2018-08-10",
  "navOne": 1111.77,
  "navAll": 26726842.97
}, {
  "dataDate": "2018-08-09",
  "navOne": 1084.51,
  "navAll": 26071664.96
}, {
  "dataDate": "2018-08-08",
  "navOne": 1103.57,
  "navAll": 26529922.91
}, {
  "dataDate": "2018-08-07",
  "navOne": 1110.70,
  "navAll": 26701267.63
}, {
  "dataDate": "2018-08-06",
  "navOne": 1111.54,
  "navAll": 26721338.92
}, {
  "dataDate": "2018-08-03",
  "navOne": 1107.32,
  "navAll": 26619905.27
}, {
  "dataDate": "2018-08-02",
  "navOne": 1098.61,
  "navAll": 26410668.38
}, {
  "dataDate": "2018-08-01",
  "navOne": 1097.00,
  "navAll": 26371830.09
}, {
  "dataDate": "2018-07-31",
  "navOne": 1104.87,
  "navAll": 26561057.23
}, {
  "dataDate": "2018-07-30",
  "navOne": 1107.51,
  "navAll": 26624509.13
}, {
  "dataDate": "2018-07-27",
  "navOne": 1108.16,
  "navAll": 26640050.94
}, {
  "dataDate": "2018-07-26",
  "navOne": 1109.25,
  "navAll": 26666434.87
}, {
  "dataDate": "2018-07-25",
  "navOne": 1106.35,
  "navAll": 26596704.78
}, {
  "dataDate": "2018-07-24",
  "navOne": 1112.16,
  "navAll": 26736323.17
}, {
  "dataDate": "2018-07-23",
  "navOne": 1116.86,
  "navAll": 26849372.75
}, {
  "dataDate": "2018-07-20",
  "navOne": 1112.90,
  "navAll": 26754049.38
}];

const dataSolidInvest = [{"dataDate":"2018-08-30","navOne":471.76,"navAll":121042720.70},{"dataDate":"2018-08-29","navOne":471.00,"navAll":120848449.46},{"dataDate":"2018-08-28","navOne":467.99,"navAll":120074135.30},{"dataDate":"2018-08-27","navOne":464.46,"navAll":119168720.12},{"dataDate":"2018-08-24","navOne":458.96,"navAll":117813689.57},{"dataDate":"2018-08-23","navOne":462.11,"navAll":118622872.88},{"dataDate":"2018-08-22","navOne":464.57,"navAll":119254542.78},{"dataDate":"2018-08-21","navOne":462.60,"navAll":118749512.08},{"dataDate":"2018-08-20","navOne":461.68,"navAll":118602621.26},{"dataDate":"2018-08-17","navOne":459.65,"navAll":118081928.65},{"dataDate":"2018-08-16","navOne":459.63,"navAll":118076921.87},{"dataDate":"2018-08-15","navOne":459.03,"navAll":117921862.75},{"dataDate":"2018-08-14","navOne":460.98,"navAll":118423520.34},{"dataDate":"2018-08-13","navOne":459.70,"navAll":118090758.35},{"dataDate":"2018-08-10","navOne":461.69,"navAll":118674170.10},{"dataDate":"2018-08-09","navOne":463.35,"navAll":119091418.46},{"dataDate":"2018-08-08","navOne":464.75,"navAll":119450643.73},{"dataDate":"2018-08-07","navOne":471.01,"navAll":121059620.17},{"dataDate":"2018-08-06","navOne":469.88,"navAll":120767503.27},{"dataDate":"2018-08-03","navOne":467.41,"navAll":120101911.18},{"dataDate":"2018-08-02","navOne":469.62,"navAll":120670507.48},{"dataDate":"2018-08-01","navOne":473.57,"navAll":121841588.55},{"dataDate":"2018-07-31","navOne":471.19,"navAll":121228124.88},{"dataDate":"2018-07-30","navOne":470.02,"navAll":120933404.79},{"dataDate":"2018-07-27","navOne":469.81,"navAll":120879704.32},{"dataDate":"2018-07-26","navOne":469.90,"navAll":120964635.06},{"dataDate":"2018-07-25","navOne":467.03,"navAll":120223728.78},{"dataDate":"2018-07-24","navOne":469.95,"navAll":120975392.52},{"dataDate":"2018-07-23","navOne":471.00,"navAll":121892555.55},{"dataDate":"2018-07-20","navOne":469.76,"navAll":121571172.22}];

class ABTestingAnalytics extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Panel md={12} lg={12} xl={12} title={"Доходность фондов"}>
        <ResponsiveContainer height={400} className='dashboard__area'>
          <AreaChart data={data} margin={{top: 20, left: -15, bottom: 20}}>
            <XAxis dataKey='name' tickLine={false}/>
            <YAxis tickLine={false}/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid/>
            <Area name='«Арсагера - КР 1.55»' type='monotone' dataKey='a' fill='#FFF' stroke='#4ce1b6' fillOpacity={0.2}/>
            <Area name='«Алёнка – Капитал»' type='monotone' dataKey='b' fill='#FFF' stroke='#70bbfd' fillOpacity={0.2}/>
            <Area name='««Солид - Индекс МосБиржи»' type='monotone' dataKey='c' fill='#FFF' stroke='#f6da6e' fillOpacity={0.2}/>
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer height={200} className='dashboard__area'>
          <AreaChart data={data2} margin={{top: 20, left: -15, bottom: 20}}>
            <XAxis dataKey='dataDate' tickLine={false}/>
            <YAxis hide={true} tickLine={true}/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid/>
            <Area name='РСП' type='monotone' dataKey='navOne' fill='#FFF' stroke='#4ce1b6' fillOpacity={0.2}/>
            <Area name='СЧА' type='monotone' dataKey='navAll' fill='#FFF' stroke='#70bbfd' fillOpacity={0.2}/>            
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer height={200} width={300} className='dashboard__area'>
          <LineChart data={dataSolidInvest} margin={{top: 20, left: -15, bottom: 20}}>                      
          <YAxis hide={true} tickLine={true}/>  
          <XAxis dataKey='dataDate' hide={true} tickLine={false}/>
            <Tooltip/>                              
            <Line name='РСП' type='monotone' dataKey='navOne' fill='#CCC' stroke='#4ce1b6' fillOpacity={0.1}/>                
          </LineChart>
        </ResponsiveContainer>

      </Panel>
    )
  }
}

export default translate('common')(ABTestingAnalytics);
