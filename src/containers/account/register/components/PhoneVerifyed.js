import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Row, Col, Button, ButtonToolbar } from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import EyeIcon from 'mdi-react/EyeIcon';
import SyncIcon from 'mdi-react/SyncIcon';
import { Link } from 'react-router-dom';
import validate from './validate';

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



class RegSteps extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {

  };


  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <div className='confirmation'>
        <div className='card__title'>
          <h3>Телефон подтверждён</h3>
          <h5 className='subhead'>Вы успешно подтвердили свой номер телефона. </h5>
        </div>
        <form className='material-form' onSubmit={handleSubmit}>
          <Button color='primary' type='submit' className='next rounded w100' >Продолжить</Button>

        </form >
      </div>
    )
  }
}

export default reduxForm({
  form: 'RegSteps', // a unique identifier for this form
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(RegSteps);