import React, { PureComponent } from 'react';
import { Row, Col,Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import FundPage from './components/FundPage';
import { NavLink } from 'react-router-dom';

export default class fundPage extends PureComponent {
  render() {
    return (
      <Container className='fundPage'>

        <div>
          <Breadcrumb>
            <BreadcrumbItem> <NavLink className='fund__card' to={'/funds'} onClick={this.props.onClick}>Фонды</NavLink></BreadcrumbItem>
            <BreadcrumbItem><NavLink className='fund__card' to={'/uk/uk_page'} onClick={this.props.onClick}>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»</NavLink></BreadcrumbItem>
            <BreadcrumbItem active>ОПИФ РФИ «ТФГ - Валютные Еврооблигации»</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <h1 className='page-title'>ОПИФ РФИ Валютные еврооблигации» </h1>
        <h3 className='page-subhead subhead'>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»</h3>
        <Row>
          <Col>
          <FundPage />
          </Col>
        </Row>
      </Container>
    )
  }
}