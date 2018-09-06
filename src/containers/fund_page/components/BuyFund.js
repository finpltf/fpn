import React, { PureComponent } from 'react';
import { Button, ButtonToolbar, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderRadioButtonField from '../../../../components/form/RadioButton';
import CartIcon from 'mdi-react/CartIcon';

class BuyFund extends PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='dashboard__place-order-form'>
        <h3>Калькулятор</h3>
        <form className='form form--horizontal' onSubmit={handleSubmit}>
          <div className='form__form-group'>
            <label className='form__form-group-label'>Сумма инвестиций</label>
            <div className='form__form-group-field'>
              <Field
                name='price'
                component='input'
                type='text'
                placeholder='$ 1322323,3'
              />
            </div>
          </div>
          <div className='form__form-group'>
            <div className='text-semibold form__form-group-label'>Срок инвестиций</div>

            <Col className='' lg={3}>
              <Field
                name='radio'
                component={renderRadioButtonField}
                label='1 год'
                radioValue='1'
                defaultChecked
              />

            </Col>

            <Col className='' lg={3}>
              <Field
                name='radio'
                component={renderRadioButtonField}
                label='2 года'
                radioValue='2'
              />

            </Col>

            <Col className='' lg={3}>
              <Field
                name='radio'
                component={renderRadioButtonField}
                label='3 года'
                radioValue='3'
              />

            </Col>



          </div>


          <div className='form__form-group'>
            <label className='form__form-group-label'>Игого</label>
            <div className='form__form-group-field'>
              <Field
                name='total'
                component='input'
                type='text'
                placeholder='10 000'
              />
            </div>
          </div>
          <ButtonToolbar className='form__button-toolbar'>
            <Button color='primary' className='rounded' type='submit'><CartIcon /> Купить онлайн</Button>
          </ButtonToolbar>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'buy_fund_form', // a unique identifier for this form
})(BuyFund);
