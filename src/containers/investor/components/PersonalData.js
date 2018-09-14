import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { translate } from 'react-i18next';
import MaskedInput from 'react-text-mask';



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

class PersonalData extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h3>Паспортные данные</h3>
              <h5 className='subhead'>Введите свои данные в точности, как в паспорте, чтобы не пришлось заполнять анкету повторно и вам не надавали по щщам.
Обратите внимание на заглавные и строчные буквы, сокращения (гор. Москва или г. Москва), точки и букву ё.</h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>

              <div>
                <Field
                  name='name'
                  component={renderTextField}
                  placeholder='Константин'
                  label='Имя'
                  value='Константин'
                />
              </div>
              <div>
                <Field
                  name='lname'
                  component={renderTextField}
                  placeholder='Фамилия'
                  label='Фамилия'
                  value='Константинопольский'
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
              <div>
                <Field
                  name='bday'
                  component={renderTextField}
                  placeholder='Дата рождения'
                  label='Дата рождения'
                  type='text'
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
                      label='Код подразделения'
                      value='125-384'
                    />
                  </div>

                </Col>
              </Row>
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


              <Button color='primary' className='rounded w100'>Сохранить</Button>
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'PersonalData', // a unique identifier for this form
})(translate('common')(PersonalData));
