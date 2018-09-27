import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';

export default class Features extends PureComponent {
  render() {
    return (
      <section className='landing__section'>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='landing__section-title'>Основные возможности платформы</h3>
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
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/profits.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Расширенная аналитика
</h4>
                <p className='landing__feature-text'>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/growth.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Красная стрелка в руке</h4>
                <p className='landing__feature-text'>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/clock.svg'} alt='' />
                </div>
                <h4 className='landing__feature-title'>Круглосуточный доступ к системе</h4>
                <p className='landing__feature-text'>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/icons/trophy.svg'} alt='' />
                </div>


                <h4 className='landing__feature-title'>Лучшие финансовые продукты</h4>
                <p className='landing__feature-text'>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
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