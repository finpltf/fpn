
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { translate } from 'react-i18next';


import { NavLink } from 'react-router-dom';

import ShieldHalfFullIcon from 'mdi-react/ShieldHalfFullIcon';

import ShieldIcon from 'mdi-react/ShieldIcon';
import ShieldOutlineIcon from 'mdi-react/ShieldOutlineIcon';

import  UkMap  from './UkMap';



class UkOffices extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Col xs={12} sm={12} md={6} xl={5}>
        <Card>
          <CardBody>


            <div className='card__title'>
              <h3 className='semibold-text'>О компании</h3>
            </div>

            <UkMap />


          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(UkOffices);


