import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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

class AddresData extends PureComponent {
  render() {
    const {handleSubmit, reset, t} = this.props;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Адрес проживания</h5>
              <h5 className='subhead'>Скажите нам где вы живёте. Мы не придём в гости без разрешения.</h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>
            <div>
                <Field
                  name='address2'
                  component={renderTextField}
                  placeholder='Адрес регистрации'                  
                  label='Адрес регистрации'
                />
              </div>
              <div>
                <Field
                  name='adddress1'
                  component={renderTextField}
                  placeholder='Адрес проживания'
                  label='Адрес проживания'
                />
              </div>

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
              <ButtonToolbar className='form__button-toolbar'>
                <Button color='primary' type='submit'>Submit</Button>
                <Button type='button' onClick={reset}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'AddresData', // a unique identifier for this form
})(translate('common')(AddresData));
