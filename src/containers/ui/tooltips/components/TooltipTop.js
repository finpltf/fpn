import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, Card, CardBody, Col, UncontrolledTooltip} from 'reactstrap';
import {translate} from 'react-i18next';

class TooltipTop extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('ui_elements.tooltips_popovers.tooltip_on_top')}</h5>
              <h5 className='subhead'>Use default tooltip with placement <span className='red-text'>top</span></h5>
            </div>
            <ButtonToolbar className='btn-toolbar--center'>
              <Button id='TooltipTop' outline>
                Tooltip on Top
              </Button>
              <UncontrolledTooltip placement='top' target='TooltipTop'>
                Близкие родственники по прямой, восходящей и нисходящей линии - сын, дочь (в том числе усыновленные), мать, отец (в том числе усыновители), бабушка, дедушка, полнородные и неполнородные (имеющие общих отца или мать) братья и сестры или супруг(а) граждан, относящихся к вышеперечисленным категориям
              </UncontrolledTooltip>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(TooltipTop);
