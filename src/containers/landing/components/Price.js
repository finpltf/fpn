import React, { PureComponent } from 'react';
import { Col, Row, Container, Card, CardBody } from 'reactstrap';


export default class Price extends PureComponent {
  render() {
    return (
      <Container>
        <Row className='price'>
          <Col md={12}>
            <h2 className='landing__section-title'>Стоимость</h2>
            <div className='priceCard card'>

              <Card>
                <CardBody className='row'>
                  <Col lg={6}>
                    <ul><li>Широкий выбор финансовых продуктов</li><li>Мы не взымаем дополнительные комиссии за операции. Вы платите столько же, как если бы вы делали это в офисе управляющей компании.</li> <li>Получение уведомлений в личный кабинет</li> </ul>
                  </Col>

                  <Col lg={6}>
                    <h4>Бесплатно</h4>
                  </Col>
                </CardBody>
              </Card>


            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}