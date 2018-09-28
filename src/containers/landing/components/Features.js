import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';

export default class Features extends PureComponent {
  render() {
    return (
      <section className='landing__section'>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='landing__section-title'>Преимущества платформы</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/profile.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Онлайн-идентификация</h4>
                <p className='landing__feature-text'>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/certificate.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Государственная защита
</h4>
                <p className='landing__feature-text'>Деятельность управляющей компании контролируется Центральным банком РФ. Ценные бумаги хранятся в специализированном депозитарии.</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/growth.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Активы под управлением профессионалов</h4>
                <p className='landing__feature-text'>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/clock.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Простое онлан-оформление</h4>
                <p className='landing__feature-text'>Нужен только ваш паспорт или подтверждённая запись на Госуслугах.</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/goal.svg'} alt='' />
                </div>


                <h4 className='landing__feature-title'>Без дополнительных комиссий.</h4>
                <p className='landing__feature-text'>Совершая сделки через платформу комиссии будут такие же, как если бы вы пришли в офис управляющей компании.</p>
              </div>
            </Col>

            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/shield.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Высокий уровень безопасности</h4>
                <p className='landing__feature-text'>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    )
  }
}