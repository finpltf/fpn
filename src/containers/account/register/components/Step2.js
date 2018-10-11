import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Row, Col, Button, ButtonToolbar } from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import EyeIcon from 'mdi-react/EyeIcon';
import SyncIcon from 'mdi-react/SyncIcon';
import { Link } from 'react-router-dom';

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



class Step2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  componentDidMount() {

  };


  render() {
    const { handleSubmit, previousPage } = this.props;
    return (
      <div className='confirmation'>
        <div className='card__title'>
          <h3>Подтверждение телефона</h3>
          <h5 className='subhead'>Мы отправили код подтверждения на <b>7 999 888 9999</b>. <br /> Введите его в поле ниже.</h5>
        </div>
        <form className='material-form' onSubmit={handleSubmit}>
          <Row>
            <Col lg={9}>
              <Field
                name='uremaill'
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
  form: 'Step2', // a unique identifier for this form
})(Step2);
