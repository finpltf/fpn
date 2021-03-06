import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import renderCheckBoxField from '../../../../components/form/CheckBox';

class LogInForm extends PureComponent {
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
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Username</label>
          <div className='form__form-group-field'>
            <div className='form__form-group-icon'>
              <AccountOutlineIcon />
            </div>
            <Field
              name='username'
              component='input'
              type='text'
              placeholder='Name'
            />
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Password</label>
          <div className='form__form-group-field'>
            <div className='form__form-group-icon'>
              <KeyVariantIcon />
            </div>
            <Field
              name='password'
              component='input'
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <button className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
              onClick={(e) => this.showPassword(e)}><EyeIcon /></button>
          </div>
          <div className='account__forgot-password'>
            <a href=''>Forgot a password?</a>
          </div>
        </div>
        <div className='form__form-group'>
          <div className='form__form-group-field'>
            <Field
              name='remember_me'
              component={renderCheckBoxField}
              label='Remember me'
            />
          </div>
        </div>
        <div className='account__btns'>
          <Link className='btn btn-primary account__btn rounded' to='/dashboard'>Войти</Link>
        </div>
        <div className='account__have-account'>
          <p>Впервый раз здесь? <Link to='/registration'>Зарегистрируйтесь</Link></p>
        </div>

      </form>
    )
  }
}

export default reduxForm({
  form: 'log_in_form', // a unique identifier for this form
})(LogInForm);
