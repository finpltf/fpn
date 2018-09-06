import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { translate } from 'react-i18next';
import Moment from 'react-moment';

class CustomTooltip extends PureComponent {
    render() {
        const { active } = this.props;

        if (active) {
            const { payload } = this.props;
            return (
                <div className="dashboard__total-tooltip">
                    <p className="label">«Арсагера - КР 1.55»: {`${payload[0].payload.navThree}₽`}</p>
                    <p className="label">«Алёнка – Капитал»: {`${payload[0].payload.navOne}₽`}</p>
                    <p className="label">«Валютный резерв»: {`${payload[0].payload.navTwo}₽`}</p>
                    <p className="label"> Дата: <Moment format="DD.MM.YYYY">
                        {`${payload[0].payload.dataDate}`}
                    </Moment>
                    </p>

                </div>
            );
        }

        return null;
    }
}
const navAll1 = [
    {
        "dataDate": "30.08.2018",
        "navOne": 1157.45,
        "navTwo": 1164.15,
        "navThree": 1557.12
    },
    {
        "dataDate": "29.08.2018",
        "navOne": 1142.05,
        "navTwo": 1157.23,
        "navThree": 1558.73
    },
    {
        "dataDate": "28.08.2018",
        "navOne": 1145.87,
        "navTwo": 1161.48,
        "navThree": 1559.87
    },
    {
        "dataDate": "27.08.2018",
        "navOne": 1149.61,
        "navTwo": 1165.26,
        "navThree": 1557.38
    },
    {
        "dataDate": "24.08.2018",
        "navOne": 1157.96,
        "navTwo": 1157.45,
        "navThree": 1557.9
    },
    {
        "dataDate": "23.08.2018",
        "navOne": 1142.38,
        "navTwo": 1142.05,
        "navThree": 1558.25
    },
    {
        "dataDate": "22.08.2018",
        "navOne": 1134.01,
        "navTwo": 1145.87,
        "navThree": 1558.71
    },
    {
        "dataDate": "21.08.2018",
        "navOne": 1128.81,
        "navTwo": 1149.61,
        "navThree": 1558.15
    },
    {
        "dataDate": "20.08.2018",
        "navOne": 1117.55,
        "navTwo": 1157.96,
        "navThree": 1555.19
    },
    {
        "dataDate": "17.08.2018",
        "navOne": 1119.33,
        "navTwo": 1142.38,
        "navThree": 1557.48
    },
    {
        "dataDate": "16.08.2018",
        "navOne": 1112.02,
        "navTwo": 1134.01,
        "navThree": 1557.93
    },
    {
        "dataDate": "15.08.2018",
        "navOne": 1117.98,
        "navTwo": 1128.81,
        "navThree": 1556.8
    },
    {
        "dataDate": "14.08.2018",
        "navOne": 1140.45,
        "navTwo": 1117.55,
        "navThree": 1556.43
    },
    {
        "dataDate": "13.08.2018",
        "navOne": 1120.87,
        "navTwo": 1119.33,
        "navThree": 1562.15
    },
    {
        "dataDate": "10.08.2018",
        "navOne": 1111.77,
        "navTwo": 1112.02,
        "navThree": 1563.87
    },
    {
        "dataDate": "09.08.2018",
        "navOne": 1084.51,
        "navTwo": 1117.98,
        "navThree": 1566.21
    },
    {
        "dataDate": "08.08.2018",
        "navOne": 1103.57,
        "navTwo": 1140.45,
        "navThree": 1563.54
    },
    {
        "dataDate": "07.08.2018",
        "navOne": 1110.7,
        "navTwo": 1120.87,
        "navThree": 1569.61
    },
    {
        "dataDate": "06.08.2018",
        "navOne": 1111.54,
        "navTwo": 1111.77,
        "navThree": 1573.34
    },
    {
        "dataDate": "03.08.2018",
        "navOne": 1107.32,
        "navTwo": 1084.51,
        "navThree": 1580.36
    },
    {
        "dataDate": "02.08.2018",
        "navOne": 1098.61,
        "navTwo": 1103.57,
        "navThree": 1585.74
    },
    {
        "dataDate": "01.08.2018",
        "navOne": 1097,
        "navTwo": 1110.7,
        "navThree": 1585.93
    },
    {
        "dataDate": "31.07.2018",
        "navOne": 1104.87,
        "navTwo": 1111.54,
        "navThree": 1586.38
    },
    {
        "dataDate": "30.07.2018",
        "navOne": 1107.51,
        "navTwo": 1107.32,
        "navThree": 1586.88
    },
    {
        "dataDate": "27.07.2018",
        "navOne": 1108.16,
        "navTwo": 1098.61,
        "navThree": 1593.08
    },
    {
        "dataDate": "26.07.2018",
        "navOne": 1109.25,
        "navTwo": 1097,
        "navThree": 1591.09
    },
    {
        "dataDate": "25.07.2018",
        "navOne": 1106.35,
        "navTwo": 1104.87,
        "navThree": 1591.02
    },
    {
        "dataDate": "24.07.2018",
        "navOne": 1112.16,
        "navTwo": 1107.51,
        "navThree": 1589.75
    },
    {
        "dataDate": "23.07.2018",
        "navOne": 1116.86,
        "navTwo": 1108.16,
        "navThree": 1589.34
    },
    {
        "dataDate": "20.07.2018",
        "navOne": 1112.9,
        "navTwo": 1109.25,
        "navThree": 1588.31
    }
]
const navAll2 = [
    {
        "dataDate": "30.08.2018",
        "navOne": 1957.45,
        "navTwo": 1164.15,
        "navThree": 1557.12
    },
    {
        "dataDate": "29.08.2018",
        "navOne": 2242.05,
        "navTwo": 1357.23,
        "navThree": 1558.73
    },
    {
        "dataDate": "28.08.2018",
        "navOne": 1845.87,
        "navTwo": 1461.48,
        "navThree": 1559.87
    },
    {
        "dataDate": "27.08.2018",
        "navOne": 1149.61,
        "navTwo": 1165.26,
        "navThree": 1557.38
    },
    {
        "dataDate": "24.08.2018",
        "navOne": 1857.96,
        "navTwo": 1557.45,
        "navThree": 1357.9
    },
    {
        "dataDate": "23.08.2018",
        "navOne": 1742.38,
        "navTwo": 1442.05,
        "navThree": 1958.25
    },
    {
        "dataDate": "22.08.2018",
        "navOne": 1134.01,
        "navTwo": 1145.87,
        "navThree": 1558.71
    },
    {
        "dataDate": "21.08.2018",
        "navOne": 1128.81,
        "navTwo": 1149.61,
        "navThree": 1558.15
    },
    {
        "dataDate": "20.08.2018",
        "navOne": 1117.55,
        "navTwo": 1157.96,
        "navThree": 1555.19
    },
    {
        "dataDate": "17.08.2018",
        "navOne": 1119.33,
        "navTwo": 1142.38,
        "navThree": 1557.48
    },
    {
        "dataDate": "16.08.2018",
        "navOne": 1112.02,
        "navTwo": 1134.01,
        "navThree": 1557.93
    },
    {
        "dataDate": "15.08.2018",
        "navOne": 1117.98,
        "navTwo": 1128.81,
        "navThree": 1556.8
    },
    {
        "dataDate": "14.08.2018",
        "navOne": 1235.45,
        "navTwo": 1809.55,
        "navThree": 1556.43
    },
    {
        "dataDate": "13.08.2018",
        "navOne": 1120.87,
        "navTwo": 1119.33,
        "navThree": 1562.15
    },
    {
        "dataDate": "10.08.2018",
        "navOne": 1111.77,
        "navTwo": 1112.02,
        "navThree": 1563.87
    },
    {
        "dataDate": "09.08.2018",
        "navOne": 1084.51,
        "navTwo": 1867.98,
        "navThree": 1566.21
    },
    {
        "dataDate": "08.08.2018",
        "navOne": 2103.57,
        "navTwo": 1940.45,
        "navThree": 1163.54
    },
    {
        "dataDate": "07.08.2018",
        "navOne": 1410.7,
        "navTwo": 1120.87,
        "navThree": 1269.61
    },
    {
        "dataDate": "06.08.2018",
        "navOne": 1611.54,
        "navTwo": 1811.77,
        "navThree": 1973.34
    },
    {
        "dataDate": "03.08.2018",
        "navOne": 1107.32,
        "navTwo": 1084.51,
        "navThree": 1580.36
    },
    {
        "dataDate": "02.08.2018",
        "navOne": 1098.61,
        "navTwo": 1103.57,
        "navThree": 1585.74
    },
    {
        "dataDate": "01.08.2018",
        "navOne": 1097,
        "navTwo": 1110.7,
        "navThree": 1585.93
    },
    {
        "dataDate": "31.07.2018",
        "navOne": 1104.87,
        "navTwo": 1111.54,
        "navThree": 1586.38
    },
    {
        "dataDate": "30.07.2018",
        "navOne": 1107.51,
        "navTwo": 1107.32,
        "navThree": 1586.88
    },
    {
        "dataDate": "27.07.2018",
        "navOne": 1108.16,
        "navTwo": 1098.61,
        "navThree": 1593.08
    },
    {
        "dataDate": "26.07.2018",
        "navOne": 1109.25,
        "navTwo": 1097,
        "navThree": 1591.09
    },
    {
        "dataDate": "25.07.2018",
        "navOne": 1106.35,
        "navTwo": 1104.87,
        "navThree": 1591.02
    },
    {
        "dataDate": "24.07.2018",
        "navOne": 1112.16,
        "navTwo": 1107.51,
        "navThree": 1589.75
    },
    {
        "dataDate": "23.07.2018",
        "navOne": 1116.86,
        "navTwo": 1108.16,
        "navThree": 1589.34
    },
    {
        "dataDate": "20.07.2018",
        "navOne": 1112.9,
        "navTwo": 1109.25,
        "navThree": 1588.31
    }
];

class FundsNavChart extends PureComponent {
    render() {
        const { t } = this.props;

        return (

            <Col xs={12} md={12} lg={12} xl={12}>
                <Card>
                    <CardBody>

                        <div className='card__title'>
                            <h3 className='semibold-text'>Расчётная стоимость пая</h3>
                        </div>
                        <ResponsiveContainer height={380}>

                            <AreaChart data={navAll1}
                                margin={{ top: 0, right: 0, left: 4, bottom: 0 }}>
                                <defs>
                                    <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                                        <stop offset='0' stopColor='#333' stopOpacity={0.5} />
                                        <stop offset='100%' stopColor='#333' stopOpacity={0.05} />
                                    </linearGradient>

                                    <defs>
                                        <linearGradient id='colorUv2' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='0' stopColor='#ddd' stopOpacity={0.5} />
                                            <stop offset='100%' stopColor='#ddd' stopOpacity={0.05} />
                                        </linearGradient>
                                    </defs>
                                    <defs>
                                        <linearGradient id='colorUv3' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='0' stopColor='#999' stopOpacity={0.5} />
                                            <stop offset='100%' stopColor='#999' stopOpacity={0.05} />
                                        </linearGradient>
                                    </defs>
                                </defs>

                                <YAxis dataKey='navOne' padding={{ top: 10, bottom: 5, left: 0, right: 10 }} hide={true} axisLine={true} tickLine={false} tickFormatter={value => `${value}₽`} axisLine={false} tickLine={false} domain={[dataMin => (Math.abs(dataMin) * 0.2), dataMax => (Math.abs(dataMax) * 1.5)]} />
                                <XAxis dataKey='dataDate' padding={{ top: 10, bottom: 5, left: 0, right: 10 }} minTickGap={150} hide={true} axisLine={true} tickLine={false} tickFormatter={value => `${value}`} axisLine={true} tickLine={false} domain={[dataMin => (Math.abs(dataMin)), dataMax => (Math.abs(dataMax))]} />
                                <Tooltip className='dashboard__total-tooltip' />
                                <Area name='ОПИФ «АЛЁНКА – КАПИТАЛ»' type='monotone' dataKey='navOne' stroke='#333' strokeWidth={1} fill='url(#colorUv)' fillOpacity={0.8} />
                                <Area name='ОПИФ «Валютные еврооблигации»' type='monotone' dataKey='navTwo' stroke='#ddd' strokeWidth={1} fill='url(#colorUv2)' fillOpacity={0.8} />
                                <Area name='ОПИФ «Криптовалютные еврейские облигации»' type='monotone' dataKey='navThree' stroke='#ccc' strokeWidth={1} fill='url(#colorUv3)' fillOpacity={0.8} />
                                <CartesianGrid strokeDasharray='2 2' />
                            </AreaChart>

                        </ResponsiveContainer>
                    </CardBody>
                </Card>

            </Col>
        )
    }
}

export default translate('common')(FundsNavChart);
