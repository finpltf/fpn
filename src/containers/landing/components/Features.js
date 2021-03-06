import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';

export default class Features extends PureComponent {
  render() {
    return (
      <section className='landing__section features'>
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
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/fingerprint.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Онлайн-идентификация</h4>
                <p className='landing__feature-text'>Вы сможете подтвердить свою личность на сайте Финансовой платформы с помощью вашего аккаунта на Госуслугах или по паспорту и СНИЛС</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/certificate.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Сделки с паями онлайн</h4>
                <p className='landing__feature-text'>Дистанционное оформление сделок с управляющей компанией проще, чем в офисе, и занимает меньше времени</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/planet-earth.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Инвестиции 24х7</h4>
                <p className='landing__feature-text'>Вы больше не зависите от часов работы управляющей компании, банка или агента. Инвестируйте находясь в любой точке мира</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/percentage.svg'} alt='' />
                </div>


                <h4 className='landing__feature-title'>Без конских комиссий</h4>
                <p className='landing__feature-text'>Вы платите не так уж и много, пользуясь всеми преимуществами онлайн-доступа на финансовый рынок. Нужно заменить это преимущество.</p>
              </div>
            </Col>

            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/idea.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Осознанное принятие решения</h4>
                <p className='landing__feature-text'>Вы принимаете решение об инвестировании после внимательного изучения достоверной информации, с помощью удобных инструментов сравнения и выбора</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/shield.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Высокий уровень безопасности</h4>
                <p className='landing__feature-text'>Уровень безопасности электронных сделок соответствует требованиям международного стандарта информационной безопасности ISO/IEC 27001:2013</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}