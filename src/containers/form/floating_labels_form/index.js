import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import PersonalData from './components/PersonalData';
import PassportData from './components/PassportData';
import AddressData from './components/AddressData';
import showResults from './components/Show';
import {translate} from 'react-i18next';


class FloatingLabelsForm extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Container noWrap>
        <Row> 
          <Col md={12}>
            <h3 className='page-title'>{t('forms.floating_labels_form.title')}</h3>
            <h3 className='page-subhead subhead'>Use ОПА elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <PersonalData onSubmit={showResults}/>                 
        </Row>
        <Row>
        <PassportData />
        <AddressData />
        </Row>
        
      </Container>
    )
  }
}

export default translate('common')(FloatingLabelsForm);
