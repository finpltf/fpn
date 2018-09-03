import React, {PureComponent} from 'react';
import {Col, Container, Row, Button, ButtonGroup, ButtonToolbar,  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown} from 'reactstrap';
  import {Field, reduxForm} from 'redux-form';
  import TextField from '@material-ui/core/TextField';
  import MenuItem from '@material-ui/core/MenuItem';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import FundCard from './components/fundCard';
import FundFilter from './components/fundFilter';
import Blockquote from './components/Blockquote';
import Highlight from './components/Highlight';
 

import {translate} from 'react-i18next';

const renderTextField = ({input, label, meta: {touched, error}, children, select}) => (
  <TextField
    className='material-form__field'
    label={label}
    error={touched && error}
    value={input.value}
    children={children}
    select={select}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);


class funds extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Container className='fundsList'>
        <Row> 
          <Col md={12}>
            <h3 className='page-title'>{t('ui_elements.funds.title')}</h3>          
          </Col>
        </Row>

      <FundFilter/>
         
 

        <Row className='funds'>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>  
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
          <FundCard/>
 
        </Row>

      </Container>
    )
  }
}

export default translate('common')(funds);
