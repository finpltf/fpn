import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { translate } from 'react-i18next';

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

class PassportData extends PureComponent {
  render() {
    const { handleSubmit, reset, t } = this.props;
    return (
        <Card>
          <CardBody>
            <div className='card__title'>
              <h3> Банковские реквизиты</h3>
              <h5 className='subhead'>Укажите реквизиты вашего банковоского счёта</h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>
              <div>
                <Field
                  name='username'
                  component={renderTextField}
                  placeholder='Название банка или БИК'
                  label='Название или БИК'
                />
              </div>


              <div>
                <Field
                  name='email'
                  component={renderTextField}
                  placeholder='Корр. Счет'
                  type='text'
                  label='Корр. Счет'
                />
              </div>
              <div>
                <Field
                  name='url'
                  component={renderTextField}
                  placeholder='Адрес банка'
                  label='Адрес банка'
                  type='text'
                />
              </div>
              <div>
                <Field
                  name='url'
                  component={renderTextField}
                  placeholder='Расчётный счёт'
                  label='Расчётный счёт'
                  type='text'
                />
              </div>



              <Button color='primary' className='rounded w100' type='submit'>Сохранить</Button>

            </form>
          </CardBody>
        </Card>
    )
  }
}

export default reduxForm({
  form: 'PassportData', // a unique identifier for this form
})(translate('common')(PassportData));
