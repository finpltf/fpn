import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

const cbrf = process.env.PUBLIC_URL + '/img/landing/cbrf.svg';
const investfunds = process.env.PUBLIC_URL + '/img/landing/investfunds.jpg';
const infinitum = process.env.PUBLIC_URL + '/img/landing/infinitum.svg';
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
              <h3 className='landing__section-title'>Партнёры</h3>
            </Col>
          </Row>
          <Row className='hide'>
            <Col md={{ size: 3, offset: 0 }} sm={{ size: 4, offset: 2 }} xs={6}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src='https://my.platform.finance/site/org_291_logo.jpg' alt='react' />
                </div>
              </div>
            </Col>
            <Col md={{ size: 2, offset: 0 }} sm={4} xs={6}>
              <div className='landing__technology landing__technology--small'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src='https://my.platform.finance/site/org_278_logo.jpg' alt='router' />
                </div>
              </div>
            </Col>
            <Col md={{ size: 2, offset: 0 }} sm={4} xs={6}>
              <div className='landing__technology landing__technology--small'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src='https://my.platform.finance/site/org_169_logo.jpg' alt='router' />
                </div>
              </div>
            </Col>
            <Col md={{ size: 3, offset: 0 }} sm={{ size: 4, offset: 2 }} xs={6}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src='https://my.platform.finance/site/org_484_logo.jpg' alt='bootstrap' />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 3, offset: 3 }} sm={6} xs={12}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={cbrf} alt='react' />
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={infinitum} alt='bootstrap' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}