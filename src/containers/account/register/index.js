import React, { PureComponent } from 'react';
import RegisterForm from './components/RegisterForm';
import { Link } from 'react-router-dom';
import WizardForm from './components/WizardForm';
import { Col, Row } from 'reactstrap';
const rega = process.env.PUBLIC_URL + '/img/rega.svg';
const uk = process.env.PUBLIC_URL + '/img/landing/icons/bank_1.svg';
const certificate = process.env.PUBLIC_URL + '/img/landing/icons/certificate.svg';
export default class Register extends PureComponent {

  render() {
    return (
      <div className='account'>
        <div className='account__wrapper'>
          <div className='account__card'>
            <Row>

              <Col className='side side__left' xl={5}>

<div className='text'>
                <h4>Зарегистрируйтесь чтобы :</h4>
                <ul>
                  <li>Покупать, обменивать и погашать паи</li>
                  <li>Отслежевать состояние инвестпортфеля</li>
                  <li>Учёт и аналитика личных финансов</li>

                </ul>
</div>
              </Col>


              <Col className='side side__right' xl={7}>
                <WizardForm onSubmit />

              </Col>
            </Row>

          </div>
        </div>
      </div>
    )
  }
}