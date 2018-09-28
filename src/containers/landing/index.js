import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
import Header from './components/Header';
import Why from './components/Why';
import Technologies from './components/Technologies';
import Demos from './components/Demos';
import Features from './components/Features';
import Purchase from './components/Purchase';
import Footer from './components/Footer';
import FeatureRequest from './components/FeatureRequest';
import { Link } from 'react-router-dom';

const logo = process.env.PUBLIC_URL + '/img/landing/logo_svg.svg';

const fund_cards = process.env.PUBLIC_URL + '/img/landing/fund_cards.png';
const funds_scroll = process.env.PUBLIC_URL + 'https://is.gd/djrEgv';
const code_example = process.env.PUBLIC_URL + '/img/landing/code_example.png';
const responsive = process.env.PUBLIC_URL + '/img/landing/admin_book.png';
const fund_page = process.env.PUBLIC_URL + 'https://is.gd/UkBPmk';
const browser = process.env.PUBLIC_URL + '/img/landing/browser.svg';



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
                    })}>Преимущества
                    </button>
                    <button
                      onClick={() => scrollToComponent(this.Technologies, { offset: -50, align: 'top', duration: 1500 })}>Партнёры
                    </button>
                    <button
                      onClick={() => window.location.href = '/funds'}>
                      Каталог фондов
                    </button>
                    <button
                      onclick={() => window.location.href = '/dashboard'}
                    >
                      Личный кабинет
                      <span className='landing__menu-nav-new' />
                    </button>

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


        <span ref={(section) => {
          this.Features = section;
        }} />
        <Features />



        <Row className='landing__code'>
          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-text'>
              <div className='landing__code-wrap'>
                <h3 className='landing__section-title'>Ещё какой-то интересный блок</h3>
                <p>Нужно подумать что сюда вставить, чтобы это было полезно, интересно, стильно, модно и молодёжно.</p>

              </div>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-img landing__code-img--no-shadow'>
              <div className='landing__code-wrap'>

                <div className='browser'>
                  <div className='panel'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <img className='' src={fund_page} alt='' />
                </div>

              </div>
            </div>
          </Col>
        </Row>

        <Row className='landing__code'>

          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-text'>
              <div className='landing__code-wrap'>
                <h3 className='landing__section-title'>Какой-то ещё интересный блок</h3>
                <p>Нужно подумать что сюда вставить, чтобы это было полезно, интересно, стильно, модно и молодёжно. </p>

              </div>
            </div>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-img landing__code-img--no-shadow'>
              <div className='landing__code-wrap'>
                <Link to='/funds' >
                  <div className='browser'>
                    <div className='panel'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <img className='' src={funds_scroll} alt='' />
                  </div>

                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='landing__code'>
          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-text'>
              <div className='landing__code-wrap'>



                <h3 className='landing__section-title'>Инвестируйте с компьютера или мобильных устройствах</h3>
                <p>Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла. Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла. <br /><br />Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла. Тыры-пыры, трали-вали, тоси-боси, бла-бла-бла.</p>
                <p className='text-center'>
                  <br /><br />
                  <Link className='landing__btn landing__btn--header rounded' to='/registration' >Создать личный кабинет</Link>
                </p>
              </div>
            </div>
          </Col>



          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-img landing__code-img--no-shadow'>
              <div className='landing__code-wrap'>
                <img className='landing__img landing__img--over' src={responsive} alt='' />
              </div>
            </div>
          </Col>
        </Row>


        <Why />

        <span ref={(section) => {
          this.Technologies = section;
        }} />
        <Technologies />

        <br /><br /><br />


        <FeatureRequest />

        <Footer />
      </div>
    )
  }
}