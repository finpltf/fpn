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
              <h2 className='landing__header-title'>Покупайте ПИФы онлайн<br />
              </h2>
              <span className='landing__header-subtitle'>без дополнительных комиссий и бумажных документов</span>
              <p class="landing__header-subhead">
                Мы собрали фонды лидирующих компаний на одной витрине и сделали процесс инвестирования простым и прозрачным. Визиты в офисы компаний и бумажные документы больше не нужны. <br />Все операции с паями 100% онлайн.


</p>
              <Link className='landing__btn landing__btn--header rounded' to='/funds' >Перейти в каталог ПИФ</Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}