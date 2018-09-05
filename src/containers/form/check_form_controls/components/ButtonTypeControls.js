import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import renderCheckBoxField from '../../../../components/form/CheckBox';
import { translate } from 'react-i18next';

class DefaultControls extends PureComponent {
  render() {
    const {
      handleSubmit,
      // reset,
      t
    } = this.props;

    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('forms.check_form_controls.button_type_controls')}</h5>
              <h5 className='subhead'>Checkboxes and radio buttons. Use class
                <span className='red-text'> button</span>
              </h5>
            </div>
            <form className='form form--preview' onSubmit={handleSubmit}>

              <div>


                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='radio_disabled'
                      component={renderCheckBoxField}
                      label='1 год'
                      class='button'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='radio_disabled'
                      component={renderCheckBoxField}
                      label='2 года'
                      defaultChecked={true}
                      class='button'
                    />
                  </div>
                </div>
              </div>
              <div>



              </div>

            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'button_type_controls', // a unique identifier for this form
})(translate('common')(DefaultControls));
