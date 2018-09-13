import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'reactstrap';
import renderIntervalDatePickerField from '../../../components/form/IntervalDatePicker';

import { translate } from 'react-i18next';

class DatePickers extends PureComponent {

    render() {
        const {
            handleSubmit,
            // reset,
            t
        } = this.props;

        return (
            <Row className='date-range-selector'>
                <Col xl={12}>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form__form-group'>
                            <div className='form__form-group-field'>
                                <Field
                                    name='interval_date'
                                    component={renderIntervalDatePickerField}
                                />
                            </div>
                        </div>
                    </form>
                      
                </Col>

            </Row>

        )
    }
}

export default reduxForm({
    form: 'date_picker_form', // a unique identifier for this form
})(translate('common')(DatePickers));
