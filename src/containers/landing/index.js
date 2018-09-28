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

const new_update = process.env.PUBLIC_URL + '/img/landing/new.png';
const code_example = process.env.PUBLIC_URL + '/img/landing/code_example.png';
const responsive = process.env.PUBLIC_URL + '/img/landing/admin_book.png';



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



                <h3 className='landing__section-title'>Контроль инвестиций где бы вы не находились</h3>
                <p>Мы сделали процесс инвестиций простым и удобным. Современные технологии позволяют управлять вложениями в любое время и в любом месте.</p> <p>Отслеживайте изменения рынка и состояние вашего инвестиционного портфеля в режиме реального времени.</p>
                <p>
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
                <img className='landing__img landing__img--over-right' src={code_example} alt='' />
              </div>
            </div>
          </Col>
        </Row>

        <Row className='landing__code'>
          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-text'>
              <div className='landing__code-wrap'>
                <h3 className='landing__section-title'>Перейдите в каталог ПИФ</h3>
                <p>Выберите фонды по желаемым критериям. Если не знаете какой ПИФ выбрать, напишите нам в чат, мы поможем принять решение.</p>

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

        <Technologies />
        <FeatureRequest />
        <Footer />
      </div>
    )
  }
}