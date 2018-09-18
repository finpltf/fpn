import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { translate } from 'react-i18next';
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

class AnketaPODFT extends PureComponent {
    render() {
        const { handleSubmit, reset, t } = this.props;
        return (
                <Card>
                    <CardBody>
                        <div className='card__title'>
                            <h3>Анкета ПОД/ФТ</h3>
                            <h5 className='subhead'> Относитесь ли вы к следующим категориям граждан?</h5>
                        </div>
                        <form className='material-form' onSubmit={handleSubmit}>

                            <div>
                                <div className=''>
                                    <CheckBox checked label={t('podft.docs_out')} />

                                </div>
                            </div>
                            <Button color='primary' type='submit' className='rounded w100'>Сохранить</Button>
                        </form>
                    </CardBody>
                </Card>
        )
    }
}

export default reduxForm({
    form: 'AnketaPODFT', // a unique identifier for this form
})(translate('common')(AnketaPODFT));
