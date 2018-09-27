import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
const background = process.env.PUBLIC_URL + '/img/landing/header_bg.png';
const clock = process.env.PUBLIC_URL + 'https://platform.finance/img/icons/clock.svg';
const online = 'https://svgshare.com/i/8Vx.svg';
const cabinet = 'https://svgshare.com/i/8Vk.svg';
const tax = 'https://svgshare.com/i/8Vj.svg';

export default class Why extends PureComponent {
  render() {
    return (
      <Container>
        <Row className='why'>
          <Col md={12}>
            <h2 className='landing__header-title'>Почему выбирают нас</h2>
            <Row>
              <Col>

                <img className='icon' src={cabinet} alt='' />
                <h4>Удобный личный кабинет</h4>
                <p>Объедените фонды различных управляющих компаний в вашем личном кабинете.</p>
              </Col>

              <Col>

                <img className='icon' src={online} alt='' />
                <h4>Всё 100% онлайн</h4>
                <p>  Покупка, обмен, продажа онлайн, без каких-либо бумажных документов.</p>
              </Col>


              <Col>


                <img className='icon' src={tax} alt='' />
                <h4>Это бесплатно</h4>
                <p>Вы платите столько же, как если бы вы пришли непосредственно в офис управляющей компании.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}