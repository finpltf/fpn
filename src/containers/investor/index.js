import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import PersonalData from './components/PersonalData';
import PassportData from './components/PassportData';
import AddressData from './components/AddressData';
import showResults from './components/Show';
import { translate } from 'react-i18next';


class InvestorProfile extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Container noWrap>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <h3 className='page-title'>{t('forms.floating_labels_form.title')}</h3>
            <h3 className='page-subhead subhead'></h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={6} >
            <PersonalData onSubmit={showResults} />
          </Col>

          <Col sm={12} md={12} lg={6}>
            <PassportData />
          </Col>

          <Col sm={12} md={12} lg={6}>
            <AddressData />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default translate('common')(InvestorProfile);
