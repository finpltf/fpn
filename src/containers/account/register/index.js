import React, { PureComponent } from 'react';
import WizardForm from './components/WizardForm';
import { Container, Col, Row, Card, CardBody } from 'reactstrap';
import showResults from './components/Show';

const rega = process.env.PUBLIC_URL + '/img/rega.svg';
const uk = process.env.PUBLIC_URL + '/img/landing/icons/bank_1.svg';
const shield = process.env.PUBLIC_URL + '/img/landing/icons/shield.svg';
const piggy = process.env.PUBLIC_URL + '/img/landing/icons/piggy.svg';
const cash = process.env.PUBLIC_URL + '/img/landing/icons/cash.svg';
export default class Register extends PureComponent {

  render() {
    return (
      <div className='accountPage '>
        <div className='account'>
          <Card className='account__wrapper'>
            <CardBody>
              <WizardForm onSubmit={showResults} />
            </CardBody>
          </Card>
        </div>

        <Row className='reg__features'>
          <Col>
            <div className='feature__icon'>
              <img src={cash} />
            </div>
            <div className='feature__title'>
              Просто
</div>
          </Col>
          <Col>
            <div className='feature__icon'>
              <img src={piggy} />
            </div>
            <div className='feature__title'>
              Бесплатно
</div>
          </Col>
          <Col>
            <div className='feature__icon'>
              <img src={shield} />
            </div>
            <div className='feature__title'>
              Безопасно
</div>
          </Col>
        </Row>
      </div>
    )
  }
}