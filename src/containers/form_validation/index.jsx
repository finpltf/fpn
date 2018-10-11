import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import VerticalForm from './components/VerticalForm';
import showResults from './Show';

const FormValidation = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.from_validation.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <VerticalForm onSubmit={showResults} />
    </Row>
  </Container>
);

FormValidation.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(FormValidation);
