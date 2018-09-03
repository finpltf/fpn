import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Card, CardBody, Col, Row, Button, ButtonToolbar} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {translate} from 'react-i18next';
import MaskedInput from 'react-text-mask';


const renderTextField = ({input, label, meta: {touched, error}, children, select, mask}) => (
  <TextField
    className='material-form__field'
    label={label}
    error={touched && error}
    value={input.value}
    mask={mask}
    children={children}
    select={select}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

const renderField = ({input, label, placeholder, type, meta: {touched, error}, mask}) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask}/>
);

const all = /[A-Za-z0-9]/;

class WizardForm1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
    
    this.showPassword = this.showPassword.bind(this);
  }
  
  showPassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    })
  }
  
  render() {
    const {handleSubmit, previousPage} = this.props;
    
    return (
      <form className='form form--horizontal wizard__form' onSubmit={handleSubmit}>
        <h3 className='wizard__title'>Fill your personal data</h3>
        <div>
                <Field
                  name='name'
                  component={renderTextField}
                  placeholder='Имя'
                  label='Имя'
                />
              </div>
              <div>
                <Field
                  name='lname'
                  component={renderTextField}
                  placeholder='Фамилия'
                  label='Фамилия'
                />
              </div>
              <div>
                <Field
                  name='mname'
                  component={renderTextField}
                  placeholder='Отчество'
                  label='Отчество'
                />
              </div>
     

             <Row>
          <Col xs={6}>  
          <div>
                <Field
                  name='pass_seria'
                  component={renderTextField}
                  placeholder='Серия'
                  label='Серия'
                />
              </div>

          </Col>
          <Col xs={6}>  
 
          <div>
                <Field
                  name='pass_num'
                  component={renderTextField}
                  placeholder='Номер'
                  label='Номер'
                />
              </div>
          
          </Col>
        </Row>
        <div>
                <Field
                  name='vendor'
                  component={renderTextField}
                  placeholder='Кем выдан'
                  label='Кем выдан'
                />
              </div>

             <Row>
          <Col xs={6}>  
          <div>
                <Field
                  name='data'
                  component={renderTextField}
                  placeholder='Дата выдачи'
                  label='Дата выдачи'
                />
              </div>

          </Col>
          <Col xs={6}>  
 
          <div>
                <Field
                  name='pass_code'
                  component={renderTextField}
                  placeholder='Код подразделения'
                  label='Код подразделения '
                />
              </div>
          
          </Col>
        </Row>

              <div>
                <Field
                  name='bday'
                  component={renderTextField}
                  placeholder='Дата рождения'
                  label='Дата рождения'
                  type='text'
                  mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                />
              </div>
        <ButtonToolbar className='form__button-toolbar wizard__toolbar'>
          <Button color='primary' type='button' disabled className='previous' onClick={previousPage}>Back</Button>
          <Button color='primary' type='submit' className='next'>Next</Button>
        </ButtonToolbar>
      </form>
    )
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardForm1);
