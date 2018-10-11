import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


const renderTextField = ({ input, label, meta: { touched, error }, children, select }) => (
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


class RegisterForm extends PureComponent {
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
    const { handleSubmit } = this.props;

    return (
      <div className='registration'>
        <div className='card__title'>
          <h3>Регистрация</h3>
          <h5 className='subhead'>Это не займёт у вас больше 3 минут.</h5>
        </div>
        <form className='material-form' onSubmit={handleSubmit}>
          <div>
            <Field
              name='uremaill'
              component={renderTextField}
              placeholder='your@email.com'
              label='E-mail или телефон'
              type='text'
            />
          </div>
          <div>
            <Field
              name='password'
              component={renderTextField}
              type='password'
              label='Пароль'
            />
          </div>
          <Button color='primary' type='submit' className='next rounded w100' >Зарегистрироваться</Button>

        </form>

        <div className='account__have-account'>
          <p>Уже зарегистрированы? <Link to='/login'>Войдите</Link></p>
        </div>
      </div>

    )
  }
}

export default reduxForm({
  form: 'register_form', // a unique identifier for this form
})(RegisterForm);
