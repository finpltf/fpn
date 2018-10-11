const validate1 = values => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Пожалуйста e-mail или телефон';
  }
  if (!values.email) {
    errors.email = 'Email field shouldn’t be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Укажите пароль';
  } else if (values.password == '12345') {
    errors.password = 'Ты чё, ебанутыйй!?'
  }


  return errors;
};

export default validate1;