import React, { PureComponent } from 'react';
import { Col, Container, Row, Badge, UncontrolledTooltip, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import FundPage from './components/FundPage';
import BuyButton from './components/BuyButton';
import { NavLink, withRouter } from 'react-router-dom';

export default class fundPage extends PureComponent {
  render() {
    return (
      <Container className='fund__page'>

        <div>
          <Breadcrumb>

            <BreadcrumbItem> <NavLink className='fund__card' to={'/funds'} onClick={this.props.onClick}>Витрина</NavLink></BreadcrumbItem>
            <BreadcrumbItem><a href="#">ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»</a></BreadcrumbItem>
            <BreadcrumbItem active>ОПИФ РФИ «ТФГ - Валютные Еврооблигации»</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <Row>
          <Col md={9}>
            <h1 className='page-title'>ОПИФ РФИ «ТФГ - Валютные еврооблигации»<Badge color="light" className='green' id='dailyIncomeOne' >+1.05%</Badge></h1>
            <UncontrolledTooltip placement='top' target='dailyIncomeOne'>
              Доходность за сутки
            </UncontrolledTooltip>
            <h3 className='page-subhead subhead'>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»</h3>
          </Col>
          <Col md={3}>

          </Col>
        </Row>
        <Row>



          <FundPage />

        </Row>
      </Container>
    )
  }
}