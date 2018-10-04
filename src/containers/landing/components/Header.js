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
              <h2 className='landing__header-title'>Инвестируйте в <b>ПИФ онлайн</b> — без дополнительных комиссий и бумажных документов.
              </h2>
              <p className='landing__header-subhead'><b>Финансовая платформа</b> — ваш новый инструмент для операций с паями инвестиционных фондов.  Мы наладили сотрудничество с надежными управляющими компаниями, а процесс инвестирования сделали максимально простым и понятным. Вам больше не нужны бумажные документы и визиты в офисы компаний: заключение договора и все операции с паями через интернет – теперь это возможно.
                </p>
              <Link className='landing__btn landing__btn--header rounded' to='/funds' >Перейти в каталог ПИФ</Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}