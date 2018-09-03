import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {Col, Row} from 'reactstrap';

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


class AccountForm extends PureComponent {
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
    const {handleSubmit} = this.props;
    
    return (
      <form className='form' onSubmit={handleSubmit}>
       <Row>
          <Col xs={12}>  
  
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
              </Col>
        </Row>
  
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
        <br></br>
        <Link className='btn btn-primary account__btn' to='/dashboard_default'>Сохранить</Link>
        
    

      </form>
    )
  }
}

export default reduxForm({
  form: 'account_lock_form', // a unique identifier for this form
})(AccountForm);
