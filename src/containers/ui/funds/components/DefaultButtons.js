import React, {PureComponent} from 'react';
import {Button, ButtonToolbar, ButtonGroup, Col} from 'reactstrap';
import CartIcon from 'mdi-react/CartIcon';
import EyeIcon from 'mdi-react/EyeIcon';
import HeartIcon from 'mdi-react/HeartIcon';


import {translate} from 'react-i18next';

class DefaultButtons extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col md={12} lg={12} xl={12}> 
            <ButtonToolbar>
            <ButtonGroup className='btn-group--justified'>
                <Button  color='primary' outline ><CartIcon/> Купить онлайн</Button>                                          
              </ButtonGroup>
            </ButtonToolbar>
     
      </Col>
    )
  }
}

export default translate('common')(DefaultButtons);
