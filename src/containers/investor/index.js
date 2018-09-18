import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import InvestorTabs from './components/InvestorTabs';
import { translate } from 'react-i18next';


class InvestorProfile extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Container noWrap className='investorPage'>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <h1 className='page-title'>{t('investor.title')}</h1>
          </Col>
        </Row>

        <InvestorTabs />


      </Container>
    )
  }
}

export default translate('common')(InvestorProfile);
