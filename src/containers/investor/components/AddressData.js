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

class AddresData extends PureComponent {
  render() {
    const { handleSubmit, reset, t } = this.props;
    return (
      <Card>
        <CardBody>
          <div className='card__title'>
            <h3>Анкеты ПОД/ФТ и FATCA</h3>
            <h5 className='subhead'>Скажите нам где вы живёте. Мы не придём в гости без разрешения.</h5>
          </div>
          <form className='material-form' onSubmit={handleSubmit}>

            <div>
              <Field
                name='url'
                component={renderTextField}
                placeholder='https://themeforest.net'
                label='URL'
                type='url'
              />
            </div>
            <div>
              <Field
                name='password'
                component={renderTextField}
                type='password'
                label='Password'
              />
            </div>
            <div>
              <Field
                name='select'
                component={renderTextField}
                select
                label='Select Option'
              >
                <MenuItem className='material-form__option' value='one'>One</MenuItem>
                <MenuItem className='material-form__option' value='two'>Two</MenuItem>
              </Field>
            </div>
            <div>
              <Field
                name='textarea'
                component={renderTextField}
                placeholder='Type message here'
                multiline
                rowsMax='4'
                label='Text Area'
              />
            </div>
            <Button color='primary' type='submit' className='rounded w100'>Сохранить</Button>
          </form>
        </CardBody>
      </Card>
    )
  }
}

export default reduxForm({
  form: 'AddresData', // a unique identifier for this form
})(translate('common')(AddresData));
