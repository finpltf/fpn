import React, { PureComponent } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { translate } from 'react-i18next';

class PeriodSelector extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <ButtonToolbar className='period-selector'>
        <ButtonGroup>
          <Button>3 мес.</Button>
          <Button>6 мес.</Button>
          <Button className='selected'>1 год</Button>
          <Button>3 года</Button>
          <Button>С начала года</Button>
          <Button>С момента запуска</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}

export default translate('common')(PeriodSelector);
