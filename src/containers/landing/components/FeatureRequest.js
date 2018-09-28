import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';

export default class FeatureRequest extends PureComponent {
  render() {
    return (
      <section className='landing__section'>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='end__text'>

                Зарегистрируйтесь и <b>инвестируйте онлайн</b> прямо сейчас! <br />Мы уверены, вам понравится!
                </h3>
              <div className='landing__center-btn'>
                <a className='landing__btn rounded' target='_blank' rel='noopener noreferrer'
                  href='/registration'>Зарегистрироваться</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}