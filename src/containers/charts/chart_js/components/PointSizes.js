import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {Line} from 'react-chartjs-2';
import {translate} from 'react-i18next';

const data = {
  labels: ['01.08.18', '02.08.18', '03.08.18', '04.08.18', '05.08.18', '06.08.18', '06.08.18','07.08.18','08.08.18','09.08.18'],
  datasets: [
    {
      label: 'ОПИФ РФИ "Арсагера - СИ"',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderWidth: 1,
      borderDash: [5, 3],
      pointBackgroundColor: '#36A2EB',
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4800, 4750, 4400, 4700,4890, 4920, 5048, 5100, 5200]
    },
    {
      label: 'ОПИФ РФИ "Арсагера - ФА"',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
      borderDash: [3, 3],
      pointBackgroundColor: '#FF6384',
      pointHoverRadius: 2,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4400, 4000, 3800,3900,4100, 4920, 4700, 4550, 4750]
    },
    {
      label: 'ОПИФ РФИ "Арсагера - КР 1.55"',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#FFCE56',
      borderColor: '#FFCE56',
      borderWidth: 1,
      pointBackgroundColor: '#FFCE56',
      pointHoverRadius: 5,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3300, 4500, 2800,5900,5100, 5920, 5700, 5550, 5200]
    },
    {
      label: 'ИПИФА "Арсагера-акции 6.4"',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#4BC0C0',
      borderColor: '#4BC0C0',
      borderWidth: 1,
      pointBackgroundColor: '#4BC0C0',
      pointHoverRadius: 6,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3400, 3000, 3800,2900,3100, 3920, 3700, 3550, 3750]
    }
  ]
};

const options = {
  legend: {
    position: 'bottom'
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3]
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3]
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)'
        }
      }
    ]
  }
};

class PointSizes extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('charts.react_chartjs.point_sizes')}</h5>
            </div>
            <Line data={data} options={options}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(PointSizes);
