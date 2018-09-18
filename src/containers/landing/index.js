import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Demos from './components/Demos';
import Features from './components/Features';
import Purchase from './components/Purchase';
import Footer from './components/Footer';
import FeatureRequest from './components/FeatureRequest';

const logo = process.env.PUBLIC_URL + '/img/landing/logo_svg.svg';

export default class Landing extends PureComponent {
  render() {
    return (
      <div className='landing'>
        <div className='landing__menu'>
          <Container>
            <Row>
              <Col md={12}>
                <div className='landing__menu-wrap'>
                  <p className='landing__menu-logo'>
                    <img src={logo} alt='' />
                  </p>
                  <nav className='landing__menu-nav'>
                    <button onClick={() => scrollToComponent(this.Features, {
                      offset: -50,
                      align: 'top',
                      duration: 2500
                    })}>Возможности
                    </button>
                    <button
                      onClick={() => scrollToComponent(this.About, { offset: -50, align: 'top', duration: 1000 })}>О продукте
                    </button>

                    <button
                      onClick={() => scrollToComponent(this.Demos, { offset: -50, align: 'top', duration: 1500 })}>FAQ
                    </button>
                    <button
                      onClick={() => window.location.href = '/funds'}>
                      Каталог фондов <span className='landing__menu-nav-new' />
                    </button>
                    <button
                      onclick={() => window.location.href = '/uk'}
                    >
                      Управляющие компании
                    </button>
                    <a className='landing__btn' target='_blank' rel='noopener noreferrer'
                      href='/login'>Зарегистрироваться</a>

                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Header />
        <span ref={(section) => {
          this.About = section;
        }} />
        <Technologies />
        <span ref={(section) => {
          this.Demos = section;
        }} />
        <Demos />
        <span ref={(section) => {
          this.Features = section;
        }} />
        <Features />
        <span ref={(section) => {
          this.FeatureRequest = section;
        }} />
        <FeatureRequest />
        <Purchase />
        <Footer />
      </div>
    )
  }
}