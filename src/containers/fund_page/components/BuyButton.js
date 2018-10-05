import React, { PureComponent } from 'react';
import { Button, Col } from 'reactstrap';
import CartIcon from 'mdi-react/CartIcon';


import { translate } from 'react-i18next';

class BuyButton extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <Col md={12} lg={3}>
        <Button color='primary' className='rounded'><CartIcon /> Купить онлайн</Button>
      </Col>
    )
  }
}

export default translate('common')(BuyButton);
