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

                Регистрируйте и <b>инвестируйте в ПИФы </b> онлайн, прямо сейчас! <br />
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