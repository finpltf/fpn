import React, { PureComponent } from 'react';
import { Card, CardBody, UncontrolledTooltip, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { translate } from 'react-i18next';
import CheckIcon from 'mdi-react/CheckIcon';
import QuestionMarkIcon from 'mdi-react/QuestionMarkIcon';
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

class FATCAData extends PureComponent {
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
                            <div className='' id=''>
                                <CheckBox label={t('podft.p_is_ipdl')} />
                                <QuestionMarkIcon id='p_is_ipdl' />
                            </div>
                            <UncontrolledTooltip placement='right' target='p_is_ipdl'>
                                Близкие родственники по прямой, восходящей и нисходящей линии - сын, дочь (в том числе усыновленные), мать, отец (в том числе усыновители), бабушка, дедушка, полнородные и неполнородные (имеющие общих отца или мать) братья и сестры или супруг(а) граждан, относящихся к вышеперечисленным категориям
              </UncontrolledTooltip>
                        </div>
                        <div>
                            <div className='' id='p_is_mpdl'>
                                <CheckBox label={t('podft.p_is_mpdl')} />
                            </div>
                            <UncontrolledTooltip placement='right' target='p_is_mpdl'>
                                {t('podft.p_is_adopter_tip')}
                            </UncontrolledTooltip>
                        </div>
                        <div>
                            <div id="p_is_adopter">
                                <CheckBox label={t('podft.p_is_adopter')} />
                            </div>
                            <UncontrolledTooltip placement='right' target='p_is_adopter'>
                                {t('podft.p_is_adopter_tip')}
                            </UncontrolledTooltip>
                        </div>
                        <div>
                            <div id='p_is_highpost_tip'>
                                <CheckBox label={t('podft.p_is_highpost')} />
                            </div>
                            <UncontrolledTooltip placement='right' target='p_is_highpost_tip'>
                                {t('podft.p_is_highpost_tip')}
                            </UncontrolledTooltip>
                        </div>
                        <div>
                            <div className=''>
                                <CheckBox label={t('podft.p_is_beneficial_owner')} />

                            </div>
                        </div>
                        <div>
                            <div className=''>
                                <CheckBox label={t('podft.p_is_notcomply_fatf')} />

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
    form: 'FATCAData', // a unique identifier for this form
})(translate('common')(FATCAData));
