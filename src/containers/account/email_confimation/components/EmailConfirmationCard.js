import React, {PureComponent} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import EmailIcon from 'mdi-react/EmailIcon'
import CheckboxMarkedCircleIcon from 'mdi-react/CheckboxMarkedCircleIcon'
import {Link} from 'react-router-dom';

export default class EmailConfirmationCard extends PureComponent {
  render() {

    return (
      <Col md={12}>
        <Card>
          <CardBody>
            <div className='email-confirmation'>
              <div className='email-confirmation__icon'>
                <EmailIcon className='email-confirmation__mail'/>
                <CheckboxMarkedCircleIcon className='email-confirmation__check'/>
              </div>
              <h3 className='email-confirmation__title'>Ваш e-mail подтверждён</h3>
              <p className='email-confirmation__sub'>Мы рады что вы выбрали Финансовую платформу</p>
              <ButtonToolbar className='email-confirmation__buttons'>
                <Link className='btn btn-primary' to='/dashboard_default'>Продолжить регистрацию</Link>

              </ButtonToolbar>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

