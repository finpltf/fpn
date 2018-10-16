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
          <h3>Подтвердите email</h3>
          <h5 className='subhead'>Мы отправили письмо с кодом подтверждения на your@email.com</h5>

        </div>
        <form className='material-form' onSubmit={handleSubmit}>
          <Row className='jc' >
            <Col lg={9}>
              <Field
                name='email_verif'
                component={renderTextField}
                fullWidth={true}
                label='Код подтверждения'
                type='text'
              />
            </Col>
            <Col lg={3}>
              <Link to='/login'><SyncIcon /></Link>
            </Col>
          </Row>
          <Button color='primary' type='submit' className='next rounded w100' >Подтвердить</Button>
          <Button color='secondary' type='button' className='previous rounded w100' onClick={previousPage}>Назад</Button>

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