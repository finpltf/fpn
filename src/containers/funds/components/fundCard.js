import React, { PureComponent } from 'react';
import { Card, CardBody, Col, UncontrolledTooltip } from 'reactstrap';
import { translate } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import ShieldHalfFullIcon from 'mdi-react/ShieldHalfFullIcon';

import ShieldIcon from 'mdi-react/ShieldIcon';
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon';
import SimpleLineChart from './SimpleLineChart';




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




class fundCard extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Col className='fund__card'>
        <Card className='no_padding'>
          <CardBody>
            <NavLink to={'/fund_page'} onClick={this.props.onClick}>

              <div className='card__title'>
                <h3 className='semibold-text'>{t('ui_elements.funds.basic_heading')}</h3>
                <h4 className='subhead'>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»

                </h4>
              </div>
              <div className='graph'>
                <SimpleLineChart />
              </div>

              <div className="row params  text-left">

                <Col xs={6} sm={6} md={4} xl={4} >
                  <h4 className='subhead'>Доходность</h4>
                  <h3 className='semibold-text green'>+19.05%</h3>
                </Col>

                <Col xs={6} sm={6} md={4} xl={4} className='text-center risk-column'>
                  <h4 className='subhead'>Риск</h4>
                  <h3 className='semibold-text yellow'><ShieldIcon /><ShieldHalfFullIcon /><ShieldOutlineIcon /></h3>
                </Col>

                <Col xs={6} sm={6} md={4} xl={4} className='text-right' >
                  <h4 className='subhead'>Мин. инвестиция</h4>
                  <h3 className='semibold-text'>10 000₽</h3>
                </Col>

              </div>


            </NavLink>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(fundCard);
