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
                Финансовая платформа – ваш новый инструмент для операций с паями инвестиционных фондов.
                Мы наладили сотрудничество с надежными управляющими компаниями и сделали процесс инвестирования сделали простым и понятным.
                <br />
                Вам больше не нужны бумажные документы и визиты в офисы компаний: заключение договора и все операции с паями через интернет – теперь это возможно.


</p>
              <Link className='landing__btn landing__btn--header rounded' to='/funds' >Перейти в каталог фондов</Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}