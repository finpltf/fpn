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
              <h2 className='landing__header-title'>Инвестируйте в ПИФ онлайн<br />
              </h2>
              <span className='landing__header-subtitle'>без бумажных документов и очередей</span>
              <p class="landing__header-subhead">
                Финансовая платформа – ваш новый инструмент для операций с паями инвестиционных фондов.<br />
                Мы наладили сотрудничество с надежными управляющими компаниями и сделали процесс инвестирования простым и понятным.
                <br />
                <br />
                Визиты в офисы компаний и бумажные документы вам больше не нужны:
<br></br>
                заключение договора и операции с паями через интернет — теперь это возможно!





</p>
              <Link className='landing__btn landing__btn--header rounded' to='/funds' >Перейти в каталог фондов</Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}