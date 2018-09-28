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
            <Row>
              <Col sm={12} xl={4}>

                <img className='icon' src={cabinet} alt='' />
                <h4>Удобный личный кабинет</h4>
              </Col>

              <Col sm={12} xl={4}>

                <img className='icon' src={online} alt='' />
                <h4>Всё 100% онлайн</h4>
              </Col>


              <Col sm={12} xl={4}>


                <img className='icon' src={tax} alt='' />
                <h4>Без дополнительных комиссий</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}