import React, {PureComponent} from 'react';
import {Col, Container, Row, Badge, UncontrolledTooltip} from 'reactstrap';
import FundPage from './components/FundPage';
import BuyButton  from './components/BuyButton';



export default class fundPage extends PureComponent {
  render() {
    return (
      <Container className='fund__page'>
        <Row>
          <Col md={9}> 
            <h1 className='page-title'>ОПИФ РФИ "ТФГ - Валютные еврооблигации"<Badge color="light" className='plus' id='dailyIncomeOne' >+1.05%</Badge></h1>
            <UncontrolledTooltip placement='top' target='dailyIncomeOne'>
                Доходность за сутки
            </UncontrolledTooltip>
            <h3 className='page-subhead subhead'>ООО УК «ИНВЕСТ МЕНЕДЖМЕНТ ЦЕНТР»</h3>
          </Col>
          <Col md={3}> 
          <BuyButton/>
         </Col>
        </Row>
        <Row>
          <FundPage/>       
          
        </Row> 
      </Container> 
    )
  }
}