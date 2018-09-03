import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Row, Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
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

class PersonalData extends PureComponent {
  render() {
    const {handleSubmit, reset, t} = this.props;
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Паспортные данные</h5>
              <h5 className='subhead'>Введите свои данные в точности, как в паспорте, чтобы не пришлось заполнять анкету повторно. 
Обратите внимание на заглавные и строчные буквы, сокращения (гор. Москва или г. Москва), точки и букву ё.</h5>
            </div>
            <form className='material-form' onSubmit={handleSubmit}>

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
                <Button color='primary' type='submit'>Сохранить</Button>
              </ButtonToolbar>
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
