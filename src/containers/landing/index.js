import React, { PureComponent } from 'react';
import { Col, Row, Container } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
import Header from './components/Header';
import Price from './components/Price';
import Registration from './components/Registration';
import Technologies from './components/Technologies';
import FundsLine from './components/FundsLine';
import Features from './components/Features';
import Footer from './components/Footer';
import FeatureRequest from './components/FeatureRequest';
import { NavLink, Link } from 'react-router-dom';
import UserIcon from 'mdi-react/UserIcon';

const logo = process.env.PUBLIC_URL + '/img/landing/logo_svg.svg';
const funds_scroll = process.env.PUBLIC_URL + 'https://vgy.me/BHMrSL.png';
const responsive = process.env.PUBLIC_URL + '/img/landing/admin_book.png';
const fund_page = process.env.PUBLIC_URL + 'https://vgy.me/NkQAed.png';



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
                      duration: 500
                    })}>Преимущества
                    </button>
                    <button
                      onClick={() => scrollToComponent(this.Technologies, { offset: 0, align: 'top', duration: 500 })}>Партнёры
                    </button>
                    <NavLink to={this.props.route ? this.props.route : '/funds'} onClick={this.props.onClick} >  Каталог фондов
                    </NavLink>
                    <NavLink to={this.props.route ? this.props.route : '/investor'} onClick={this.props.onClick} > Личный кабинет
                    <span className='landing__menu-nav-new' />
                    </NavLink>


                  </nav>
                  <NavLink className='cabinetIcon' to={this.props.route ? this.props.route : '/investor'} onClick={this.props.onClick} >

                    <UserIcon />

                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Header />

        <FundsLine />
        <span ref={(section) => {
          this.About = section;
        }} />

        <Row className='landing__code'>

          <Col md={6} sm={12} xs={12}>
            <div className='landing__code-text'>
              <div className='landing__code-wrap'>
                <h3 className='landing__section-title'>Фонды на любой вкус</h3>
                <p>Теперь банановыыыыый.<br /> Ну и во-первых — это красиво, во-вторых — полезно, интересно, стильно, модно и молодёжно. А ещё есть удобные фильтрики, поиск по типу, уровню риска, минимальной суммы инвестиций. </p>

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
                <h3 className='landing__section-title'>Подробная карточка фонда</h3>
                <p>Динамика изменений стоимости пая и чистых активов за весь период существования фонда. Информация о скидках, надбавках. Все необходимые документы. Простой процесс приобретения. </p>

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




        <span ref={(section) => {
          this.Features = section;
        }} />
        <Features />



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