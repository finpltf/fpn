import React, { PureComponent } from 'react';
import { Col, Row, Button, ButtonToolbar } from 'reactstrap';
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

class fundFilter extends PureComponent {
  render() {
    const { handleSubmit, reset, t } = this.props;
    return (

      <form className='material-form' onSubmit={handleSubmit}>
        <Row>
          <Col>
            <div>


              <Field
                name='fundType'
                component={renderTextField}
                select
                label='Тип фонда'
                placeholder='Тип фонда'
              >
                <MenuItem className='material-form__option' value='one'>ОПИФ</MenuItem>
                <MenuItem className='material-form__option' value='two'>ИПИФ</MenuItem>
                <MenuItem className='material-form__option' value='two'>ЗПИФ</MenuItem>
              </Field>
            </div>
          </Col>
          <Col>
            <div>
              <Field
                name='riskLevel'
                component={renderTextField}
                select
                label='Управляющая компания'
              >
                <MenuItem className='material-form__option' value='one'>Арсагера</MenuItem>
                <MenuItem className='material-form__option' value='two'>ТФГ</MenuItem>
                <MenuItem className='material-form__option' value='two'>Промсвязь</MenuItem>
              </Field>
            </div>
          </Col>
          <Col>
            <div>
              <Field
                name='minInvest'
                component={renderTextField}
                select
                label='Мин. инвестиция'
              >
                <MenuItem className='material-form__option' value='one'>1 000₽</MenuItem>
                <MenuItem className='material-form__option' value='two'>5 000₽</MenuItem>
                <MenuItem className='material-form__option' value='two'>10 000₽</MenuItem>
                <MenuItem className='material-form__option' value='two'>50 000₽</MenuItem>
                <MenuItem className='material-form__option' value='two'>100 000₽</MenuItem>
              </Field>
            </div>
          </Col>
          <Col>
            <div>
              <Field
                name='fundSize'
                component={renderTextField}
                select
                label='Сортировать по'
              >
                <MenuItem className='material-form__option' value='one'>По алфавиту</MenuItem>                
                <MenuItem className='material-form__option' value='two'>Доходность</MenuItem>
                <MenuItem className='material-form__option' value='two'>СЧА</MenuItem>
              </Field>
            </div>
          </Col>
        </Row>
      </form>

    )
  }
}

export default reduxForm({
  form: 'fundFilter', // a unique identifier for this form
})(translate('common')(fundFilter));
