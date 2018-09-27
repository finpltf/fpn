import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

const react = process.env.PUBLIC_URL + '/img/landing/technologies/react.png';
const bootstrap = process.env.PUBLIC_URL + '/img/landing/technologies/bootstrap-stack.png';
const router = process.env.PUBLIC_URL + '/img/landing/technologies/router.png';
const redux_form = process.env.PUBLIC_URL + '/img/landing/technologies/redux_form.png';
const sass = process.env.PUBLIC_URL + '/img/landing/technologies/sass.png';
const mat_ui = process.env.PUBLIC_URL + '/img/landing/technologies/mat_ui.png';
const redux = process.env.PUBLIC_URL + '/img/landing/technologies/redux.png';

const update = process.env.PUBLIC_URL + '/img/landing/seed.png';

const background = process.env.PUBLIC_URL + '/img/landing/right_bg.png';

export default class Technologies extends PureComponent {
  render() {
    return (
      <section className='landing__section'>
        <img className='landing__section-background landing__section-background--technologies' src={background} alt='' />
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='landing__section-title'>Нам доверяют</h3>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 3, offset: 3 }} sm={6} xs={12}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={react} alt='react' />
                </div>
                <p className='landing__technology-title'>React Based App</p>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={bootstrap} alt='bootstrap' />
                </div>
                <p className='landing__technology-title'>Bootstrap 4 framework</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 2, offset: 1 }} sm={4} xs={6}>
              <div className='landing__technology landing__technology--small'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={router} alt='router' />
                </div>
                <p className='landing__technology-title'>React Router</p>
              </div>
            </Col>
            <Col md={2} sm={4} xs={6}>
              <div className='landing__technology landing__technology--small'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={redux_form} alt='redux_form' />
                </div>
                <p className='landing__technology-title'>Redux Form</p>
              </div>
            </Col>
            <Col md={2} sm={4} xs={6}>
              <div className='landing__technology landing__technology--small'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={sass} alt='sass' />
                </div>
                <p className='landing__technology-title'>SCSS Preprocessor</p>
              </div>
            </Col>
            <Col md={{ size: 2, offset: 0 }} sm={{ size: 4, offset: 2 }} xs={6}>
              <div className='landing__technology landing__technology--small'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={mat_ui} alt='mat_ui' />
                </div>
                <p className='landing__technology-title'>Material UI</p>
              </div>
            </Col>
            <Col md={2} sm={{ size: 4, offset: 0 }} xs={{ size: 6, offset: 3 }}>
              <div className='landing__technology landing__technology--small'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={redux} alt='redux' />
                </div>
                <p className='landing__technology-title'>Redux</p>
              </div>
            </Col>
          </Row>
          <Row className='landing__code landing__code--first'>

            <Col md={7} sm={12} xs={12}>
              <div className='landing__code-img landing__code-img--no-shadow'>
                <div className='landing__code-wrap landing__code-wrap--rounded'>
                  <img className='landing__img' src={update} alt='' />
                </div>
              </div>
            </Col>
            <Col md={12}>
              <p className='landing__seed'>Просто начать

                <br /> <span role='img' aria-label='seedling'>🌱</span></p>
            </Col>
          </Row>

        </Container>
      </section>
    )
  }
}