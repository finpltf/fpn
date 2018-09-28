import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
const background = process.env.PUBLIC_URL + '/img/landing/header_bg.png';
const img = process.env.PUBLIC_URL + '/img/landing/macbook.png';

export default class Header extends PureComponent {
  render() {
    return (
      <div className='landing__header page' style={{ backgroundImage: 'url(' + background + ')' }}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className='landing__header-title'>Покупайте  <b>ПИФы онлайн</b>, без дополнительных комиссий и бумажных документов.
              </h2>
              <p className='landing__header-subhead'><b>Финансовая платформа</b> — это маркетплейс лучших финансовых продуктов. Мы отобрали лучшие паевые инвестиционные фонды только от надёжных управляющих компаний и сделали процесс покупки простым и понятным.
            Покупать, погашать и обменивать паи теперь легко и просто. Не нужно никуда ходить, всё онлайн.
                </p>
              <Link className='landing__btn landing__btn--header rounded' to='/funds' >Перейти в каталог ПИФ</Link>
              <hr className='invis' />
              <img className='landing__header-img' src={img} alt='macbook' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}