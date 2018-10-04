import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';

const cbrf = process.env.PUBLIC_URL + '/img/landing/cbrf.svg';
const investfunds = process.env.PUBLIC_URL + '/img/landing/investfunds.jpg';
const infinitum = process.env.PUBLIC_URL + '/img/landing/infinitum.svg';
const tfg = process.env.PUBLIC_URL + '/img/landing/uk/tfg.svg';
const iticapital = process.env.PUBLIC_URL + '/img/landing/uk/iticapital.svg';
const solid = process.env.PUBLIC_URL + '/img/landing/uk/solid.svg';
const open = process.env.PUBLIC_URL + '/img/landing/uk/open.svg';
const arsagera = process.env.PUBLIC_URL + '/img/landing/uk/arsagera.png';
const investmanagement = process.env.PUBLIC_URL + '/img/landing/uk/investmanagement.png';


export default class Technologies extends PureComponent {
  render() {
    return (
      <section className='landing__section'>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='landing__section-title'>Партнёры</h3>
            </Col>
          </Row>
          <Row className=''>
            <Col md={{ size: 2, offset: 1 }} sm={{ size: 4, offset: 0 }} xs={6}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={tfg} alt='react' />
                </div>
              </div>
            </Col>
            <Col md={{ size: 2, offset: 0 }} sm={4} xs={6}>
              <div className='landing__technology '>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={solid} alt='router' />
                </div>
              </div>
            </Col>
            <Col md={{ size: 2, offset: 0 }} sm={4} xs={6}>
              <div className='landing__technology '>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={investmanagement} alt='router' />
                </div>
              </div>
            </Col>
            <Col md={{ size: 3, offset: 0 }} sm={{ size: 4, offset: 2 }} xs={6}>
              <div className='landing__technology'>
                <div className='landing__technology-img-wrap'>
                  <img className='landing__technology-img' src={arsagera} alt='bootstrap' />
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