import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {translate} from 'react-i18next';

class BoldHeadings extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('ui_elements.funds.bold_heading')}</h5>
              <h5 className='subhead'>Use tags <span className='red-text'>h1 to h6</span> with class
                <span className='red-text'> bold-text</span>
              </h5>
            </div>
            <div className='funds-card'>
              <h1 className='bold-text'>H1 Type something </h1>
              <h2 className='bold-text'>H2 Type something </h2>
              <h3 className='bold-text'>H3 Type something </h3>
              <h4 className='bold-text'>H4 Type something </h4>
              <h5 className='bold-text'>H5 Type something </h5>
              <h6 className='bold-text'>H6 Type something </h6>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(BoldHeadings);
