import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Button, Badge } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { translate } from 'react-i18next';
import MaskedInput from 'react-text-mask';
import CheckIcon from 'mdi-react/CheckIcon';
import PropTypes from 'prop-types';

class CheckBox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
  };

  render() {
    return (
      <label
        className='checkbox-btn setting-checkbox'>
        <input className='checkbox-btn__checkbox' type='checkbox' defaultChecked={this.props.checked} />
        <span className='checkbox-btn__checkbox-custom'>
          <CheckIcon />
        </span>
        <span className='checkbox_label'>{this.props.label}</span>
      </label>
    )
  }
}

const renderTextField = ({ input, label, meta: { touched, error }, children, select, mask }) => (
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
const renderTextFieldMask = ({ input, label, meta: { touched, error }, children, select, mask }) => (
  <MaskedInput {...input}
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

const renderField = ({ input, label, placeholder, type, meta: { touched, error }, children, mask }) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask} className='material-form__field' error={touched && error}
    value={input.value} children={children} mask={mask} label={label} />
);

const all = /[A-Za-z0-9]/;

class Settings extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    const { t } = this.props;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <form className='material-form' onSubmit={handleSubmit}>
              <Row>
                <Col lg={6} md={12}>
                  <div>
                    <Field
                      name='email'
                      component={renderTextField}
                      label={t('settings.email')}
                      value='user@email.com'
                    />
                  </div>

                </Col>
                <Col lg={6} md={12}>
                  <div>

                    <Badge color='success'>New</Badge>
                    <Field
                      name='phone'
                      component={renderTextField}
                      placeholder={t('settings.phone')}
                      label={t('settings.phone')}
                      value='79660078888'
                    />
                  </div>

                </Col>
              </Row>


              <div>
                <Field
                  name='secret_word'
                  component={renderTextField}
                  placeholder={t('settings.secret_word')}
                  label={t('settings.secret_word')}
                />
              </div>

              <Row>
                <Col lg={6} md={12}>
                  <div>
                    <Field
                      name='old_password'
                      component={renderTextField}
                      placeholder='*******'
                      label={t('settings.old_password')}
                      type='password'
                    />
                  </div>

                </Col>
                <Col lg={6} md={12}>
                  <div>
                    <Field
                      name='new_password'
                      component={renderTextField}
                      placeholder='Дата рождения'
                      label={t('settings.new_password')}
                      type='password'
                    />
                  </div>

                </Col>
              </Row>


              <div>
                <CheckBox checked label={t('settings.newsletter')} />
              </div>
              <div>
                <div className='profile__current-task'>
                  <CheckBox checked label={t('settings.docs_out')} />

                </div>
              </div>
              <div>
                <CheckBox checked label={t('settings.docs_in')} />
              </div>
              <Button color='primary' className='rounded w100'>{t('settings.save')}</Button>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'Settings', // a unique identifier for this form
})(translate('common')(Settings));
