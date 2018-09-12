import React, { PureComponent } from 'react';
import { Col, Row, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { translate } from 'react-i18next';

import renderMultiSelectField from '../../../../components/form/MultiSelect';
import renderSelect from '../../../../components/form/Select';

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
            <Field className='searchFund'
              name='defaultInput'
              component='input'
              type='text'
              placeholder='Поиск фондов'
            />
        </Row>
        <Row className='funds__filter'>
          <Col>

            <div className='form__form-group'>
              <div className='form__form-group-field'>
                <Field
                  name='type'
                  component={renderMultiSelectField}
                  placeholder='Тип фонда'
                  options={[
                    { value: 'opif', label: 'ОПИФ' },
                    { value: 'ipif', label: 'ИПИФ' },
                    { value: 'zpif', label: 'ЗПИФ' },
                  ]}
                />
              </div>
            </div>

          </Col>
          <Col>
            <div className='form__form-group'>
              <div className='form__form-group-field'>
                <Field
                  name='uk'
                  component={renderMultiSelectField}
                  placeholder='Управляющая компания'
                  options={[
                    { value: 'arsagera', label: 'Арсагера' },
                    { value: 'tfg', label: 'ТФГ' },
                    { value: 'promsbyaz', label: 'Промсвязь' },
                    { value: 'investmanagement', label: 'Инвест Менеджмент Центр' },
                    { value: 'solid', label: 'Солид Менеджмент' },
                  ]}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className='form__form-group'>
              <div className='form__form-group-field'>
                <Field
                  name='minInvest'
                  component={renderMultiSelectField}
                  placeholder='Мин. инвестиция'
                  options={[
                    { value: '1000', label: 'от 1 000' },
                    { value: '5000', label: 'от 5 000' },
                    { value: '10000', label: 'от 10 000' },
                    { value: '50000', label: 'от 50 000' },
                    { value: '100000', label: 'от 100 000' },
                  ]}
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className='form__form-group'>
              <div className='form__form-group-field'>
                <Field
                  name='sort'
                  component={renderSelect}
                  placeholder='Сортировать по'
                  options={[
                    { value: '1000', label: 'по алфавиту' },
                    { value: '5000', label: 'по доходности' },
                    { value: '10000', label: 'по СЧА' },                    
                  ]}
                />
              </div>
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
