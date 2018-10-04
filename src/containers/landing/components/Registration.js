import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';

export default class Registration extends PureComponent {
  render() {
    return (
      <section className='landing__section gray'>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className='landing__section-title'>
                Инвестируйте в ПИФ
              </h2>


              <div className='form-list'>
                <ol>

                  <li>Заполните заявку на покупку паёв</li>
                  <li>Переведите средства для оплаты</li>
                  <li>Начните зарабатывать</li>
                </ol>

              </div>
              <div className="form__text">
                <div>Для открытия счета потребуется ввести свои личные данные или авторизоваться через Госуслуги.</div>
                <div>Весь процесс осуществляется онлайн и займет не более 5 минут</div>
              </div>


              <div className='form-sending'>
                <form enctype='multipart/form-data' action='/'>
                  <input name='phone' placeholder='+7 (___) ___-__-__' data-form='phone' />
                  <button disabled='' data-form='submit'>Открыть счет</button>
                </form>
              </div>

              <div className='landing__center-btn'>
                <a className='landing__btn landing__btn--gradient' target='_blank' rel='noopener noreferrer'
                  href='/registration'>Зарегистрироваться за 3 минуты</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}