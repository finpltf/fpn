import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
const background = process.env.PUBLIC_URL + '/img/landing/header_bg.png';
const img = process.env.PUBLIC_URL + '/img/landing/macbook.png';

export default class Header extends PureComponent {
  render() {
    return (
      <div className='landing__menulanding__header page' style={{ backgroundImage: 'url(' + background + ')' }}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className='landing__header-title'>Управляйте инвестициями <b>в режиме онлайн</b> на Финансовой Платформе.
              </h2>
              <p className='landing__header-subhead'>Мы собрали лучшие фонды проверенных управляющих  компаний. Инвестировать проще чам вы думаете. Специальные знания не нужны, и всё можно купить онлайн.</p>
              <Link className='landing__btn landing__btn--header' to='/funds' >Выбрать ПИФ</Link>
              <button className='landing__btn2' onClick={() => scrollToComponent(this.Demos, { offset: -450, align: 'top', duration: 3500 })}>Узнать больше</button>

              <img className='landing__header-img' src={img} alt='macbook' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}