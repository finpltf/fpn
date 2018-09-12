import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Button, ButtonToolbar, ButtonGroup } from 'reactstrap';
import { translate } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import ShieldIcon from 'mdi-react/ShieldIcon';
import CloseBoxOutlineIcon from 'mdi-react/CloseBoxOutlineIcon';
import CircleEditOutlineIcon from 'mdi-react/CircleEditOutlineIcon';
import CheckboxMarkedCircleOutlineIcon from 'mdi-react/CheckboxMarkedCircleOutlineIcon';
import SimpleLineChart from './SimpleLineChart';


const data = [
  { dataDate: 'Mon', navOne: 70.23, navAll: 425268156.23, xrp: 85.23, bch: 47.23, eos: 25.23, ltc: 69.23, ada: 52.23, xlm: 78.23, iota: 78.23, neo: 78.23 },
  { name: 'Tue', navOne: 25.5, navAll: 426024660.5, bch: 29.5, eos: 78.5, ltc: 87.5, ada: 98.5, xlm: 28.5, iota: 98.5, neo: 28.5 },
  { name: 'Wed', navOne: 78.45, navAll: 426024660.45, bch: 32.45, eos: 45.45, ltc: 45.45, ada: 78.45, xlm: 25.45, iota: 78.45, neo: 25.45 },
  { name: 'Thu', navOne: 45.2, navAll: 426024660.2, bch: 78.2, eos: 89.2, ltc: 25.2, ada: 48.2, xlm: 98.2, iota: 48.2, neo: 98.2 },
  { name: 'Fri', navOne: 56.61, navAll: 426024660.61, bch: 105.61, eos: 45.61, ltc: 78.61, ada: 88.61, xlm: 86.61, iota: 88.61, neo: 86.61 },
  { name: 'Sat', navOne: 110.6, navAll: 426024660.6, bch: 78.6, eos: 55.6, ltc: 35.6, ada: 78.6, xlm: 32.6, iota: 78.6, neo: 32.6 },
  { name: 'Sun', navOne: 115, navAll: 428128476, bch: 115, eos: 115, ltc: 115, ada: 115, xlm: 115, iota: 115, neo: 115 }
];


class CustomTooltip extends PureComponent {
  render() {
    const { active } = this.props;

    if (active) {
      const { payload } = this.props;
      return (
        <div className="dashboard__total-tooltip">
          <p className="label">Дата : <span className="label">{`${payload[0].payload.dataDate}`}</span></p>
          <p className="label">{`${payload[0].name}`}: <span className="label">{`${payload[0].value}₽`}</span></p>
          <p className="label">СЧА : <span className="label">{`${payload[0].payload.navAll}₽`}</span></p>

        </div>
      );
    }

    return null;
  }
}




class AddFundCard extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Col className='fund__card' >
        <Card className='no_padding'>
          <CardBody>
            <NavLink to={'/fund_page'} onClick={this.props.onClick}>

              <div className='card__title'>
                <h3 className='semibold-text'>Добавить фонд</h3>
              </div>


            </NavLink>
          </CardBody>
        </Card>

      </Col>
    )
  }
}

export default translate('common')(AddFundCard);
