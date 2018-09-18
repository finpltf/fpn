import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import SettingsForm from './components/Settings';
import showResults from './components/Show';
import { translate } from 'react-i18next';


class Settings extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Container noWrap className='settingsPage'>
        <Row>
          <Col md={12} lg={12}>
            <h3 className='page-title'>{t('settings.page_title')}</h3>
          </Col>
          <h3 className='page-subhead subhead'></h3>
          <SettingsForm onSubmit={showResults} />
        </Row>
      </Container>
    )
  }
}

export default translate('common')(Settings);
