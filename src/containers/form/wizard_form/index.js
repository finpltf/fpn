import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import showResults from './components/Show';
import Wizard from './components/WizardForm';
import {translate} from 'react-i18next';

class WizardForm extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Container>
        <Wizard onSubmit={showResults}/>
      </Container>
    )
  }
}

export default translate('common')(WizardForm);
