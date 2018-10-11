import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { translate } from 'react-i18next';


class FinanceData extends PureComponent {
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
                name='bic'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder='Название банка или БИК'
                label='Название или БИК'
              />
            </div>


            <div>
              <Field
                name='korschet'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder='Корр. Счет'
                type='text'
                label='Корр. Счет'
              />
            </div>
            <div>
              <Field
                name='bankaddress'
                className='inp'
                fullWidth='true'
                component={TextField}
                placeholder='Адрес банка'
                label='Адрес банка'
                type='text'
              />
            </div>
            <div>
              <Field
                name='rs'
                className='inp'
                fullWidth='true'
                component={TextField}
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
  form: 'FinanceData', // a unique identifier for this form
})(translate('common')(FinanceData));
