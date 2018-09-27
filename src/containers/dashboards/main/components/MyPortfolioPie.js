import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { PieChart, Pie, Sector, Tooltip, ResponsiveContainer } from 'recharts';
import { translate } from 'react-i18next';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
];

const data1 = [{ name: 'A1', value: 100 },
{ name: 'A2', value: 300 },
{ name: 'B1', value: 100 },
{ name: 'B2', value: 80 },
{ name: 'B3', value: 40 },
{ name: 'B4', value: 30 },
{ name: 'B5', value: 50 },
{ name: 'C1', value: 100 },
{ name: 'C2', value: 200 },
{ name: 'D1', value: 150 },
{ name: 'D2', value: 50 }
];
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


class MyPortfolioPie extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            activeIndex: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }
    getInitialState() {
        return {
            activeIndex: 0,
        };
    }

    onPieEnter(data, index) {
        this.setState({
            activeIndex: index,
        });
    }

    render() {
        const { t } = this.props;

        return (
            <Card>
                <CardBody>
                    <div className='card__title'>
                        <h5 className='bold-text'>{t('dashboard_crypto.piechart')}</h5>
                    </div>
                    <ResponsiveContainer height={320}>

                        <PieChart width={800} height={400}>
                            <Pie
                                activeIndex={this.state.activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx={300}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                onMouseEnter={this.onPieEnter}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </CardBody>
            </Card>
        )
    }
}

export default translate('common')(MyPortfolioPie);
