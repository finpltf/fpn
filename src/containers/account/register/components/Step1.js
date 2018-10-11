import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import validate from './validate'

const renderTextField = ({ input, label, meta: { touched, error }, children, select }) => (
  <div className="form__form-group-input-wrap">
    <TextField
      className='material-form__field'
      label={label}
      value={input.value}
      children={children}
      select={select}
      onChange={(e) => {
        e.preventDefault();
        input.onChange(e.target.value);
      }}
    />
    {touched && error && <span className="form__form-group-error">{error}</span>}
  </div>
);



class Step1 extends PureComponent {
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
    const { handleSubmit, pristine, reset, submitting, t } = this.props;
    return (
      <div className='registration'>
        <div className='card__title'>
          <h3>Регистрация</h3>
          <h5 className='subhead'>Это не займёт у вас больше 3 минут.</h5>
        </div>
        <form className='material-form' onSubmit={handleSubmit}>
          <div>
            <Field
              name='login'
              className='inp'
              component={renderTextField}
              label='E-mail или телефон'
              fullWidth={true}
              type='text'
            />
          </div>
          <div>
            <Field
              name='password'
              className='inp'
              component={renderTextField}
              type='password'
              fullWidth={true}
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
  form: 'Step1', // a unique identifier for this form
  validate,
})(Step1);
