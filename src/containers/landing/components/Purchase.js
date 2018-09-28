import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';

export default class Purchase extends PureComponent {
  render() {
    return (
      <section className='landing__section'>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='landing__section-title'>
                Это выгоднее чем банковский вклад или хранение денег дома под подушкой.
              Пожалуйста, <b>пройдите простую регистрацию</b> и попробуйте. Мы уверены, вам понравится!
                </h3>
              <div className='landing__center-btn'>
                <a className='landing__btn landing__btn--gradient' target='_blank' rel='noopener noreferrer'
                  href='/registration'>Зарегистрироваться за 3 минуты</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}