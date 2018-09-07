import React, { PureComponent } from 'react';
import { Col, Container, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import FundCard from './components/fundCard';
import FundFilter from './components/fundFilter';
import { NavLink } from 'react-router-dom';

import { translate } from 'react-i18next';




class funds extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Container className='fundsList'>

        <div>
          <Breadcrumb>
            <BreadcrumbItem active>Все фонды</BreadcrumbItem>
          </Breadcrumb>
        </div>


        <Row>
          <Col md={12}>
            <h3 className='page-title'>Все фонды</h3>
          </Col>
        </Row>

        <FundFilter />



        <Row className='funds__page'>
          <FundCard />
          <FundCard />
          <FundCard />
          <FundCard />
          <FundCard />
          <FundCard />
          <FundCard />
          <FundCard />
       
          <FundCard />    <FundCard />
        </Row>

      </Container>
    )
  }
}

export default translate('common')(funds);
