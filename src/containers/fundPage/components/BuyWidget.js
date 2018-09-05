import React, {PureComponent} from 'react';
import {Card, CardBody,Col} from 'reactstrap';
import Statistics from './Statistics';
import BuyButton from './ИuyButton';


export default class BuyWidget extends PureComponent {
  render() {
    return (
      <Col md={12} lg={3} xl={3}>
        <Card className='side'>
          <CardBody>


            <Col md={12} lg={12} xl={12}>
            <h3>ОПИФ «Алёнка – Капитал»</h3>
              <BuyButton/>
            </Col>

          </CardBody>
        </Card>
      </Col>
    )
  }
}