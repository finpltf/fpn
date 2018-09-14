import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import SettingsForm from './components/Settings';
import showResults from './components/Show';
import { translate } from 'react-i18next';


class Settings extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Container noWrap>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <h3 className='page-title'>{t('settings.page_title')}</h3>
            <h3 className='page-subhead subhead'></h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={12} >
            <SettingsForm onSubmit={showResults} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default translate('common')(Settings);
