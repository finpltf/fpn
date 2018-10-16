import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { translate } from 'react-i18next';
import validate from './validate';


class PersonalData extends PureComponent {
  render() {
    const { handleSubmit, pristine, reset, submitting, t } = this.props;
    return (
      <Card>
        <CardBody>
          <div className='card__title'>
            <h3>Паспортные данные</h3>
            <h5 className='subhead'>Введите свои данные в точности, как в паспорте, чтобы не пришлось заполнять анкету повторно. Обратите внимание на регистр букв, сокращения (гор. или г.), точки и букву ё.</h5>
          </div>
          <form className='material-form' onSubmit={handleSubmit}>
            <div>
              <Field
                name='lname'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder=''
                label='Фамилия'
              />
            </div>
            <div>
              <Field
                name='fname'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder=''
                maxlenght='6'
                label='Имя'
              />
            </div>

            <div>
              <Field
                name='mname'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder=''
                label='Отчество'
              />
            </div>
            <div>
              <Field
                name='bday'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder=''
                label='Дата рождения'
                type='text'
              />
            </div>

            <Row>
              <Col xs={6}>
                <div>
                  <Field
                    name='pass_seria'
                    className='inp'
                    fullWidth='true'
                    component={TextField}
                    placeholder='0000'
                    label='Серия'
                  />
                </div>

              </Col>
              <Col xs={6}>

                <div>
                  <Field
                    name='pass_num'
                    className='inp'
                    fullWidth='true'
                    component={TextField}
                    placeholder=''
                    label='Номер'
                  />
                </div>

              </Col>
            </Row>
            <div>
              <Field
                name='vendor'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder='Кем выдан'
                label='Кем выдан'
              />
            </div>

            <Row>
              <Col xs={6}>
                <div>
                  <Field
                    name='data'
                    className='inp'
                    fullWidth='true'
                    component={TextField}
                    placeholder='Дата выдачи'
                    label='Дата выдачи'
                  />
                </div>

              </Col>
              <Col xs={6}>

                <div>
                  <Field
                    name='pass_code'
                    className='inp'
                    fullWidth='true'
                    component={TextField}
                    placeholder='Код подразделения'
                    label='Код подразделения'
                    value='125-384'
                  />
                </div>

              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div>
                  <Field
                    name='snils'
                    className='inp'
                    fullWidth='true'
                    component={TextField}
                    placeholder='СНИЛС'
                    label='СНИЛС'
                  />
                </div>

              </Col>
              <Col xs={6}>

                <div>
                  <Field
                    name='inn'
                    className='inp'
                    fullWidth='true'
                    component={TextField}
                    label='ИНН'
                  />
                </div>

              </Col>
            </Row>
            <div>
              <Field
                name='address2'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder='Адрес регистрации'
                label='Адрес регистрации'
              />
            </div>
            <div>
              <Field
                name='adddress1'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder='Адрес проживания'
                label='Адрес проживания'
              />
            </div>


            <Button color='primary' className='rounded w100'>Сохранить</Button>
          </form>
        </CardBody>
      </Card>
    )
  }
}

export default reduxForm({
  form: 'PersonalData', // a unique identifier for this form
  validate,
})(translate('common')(PersonalData));

