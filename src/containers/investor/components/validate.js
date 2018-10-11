const validate = values => {
  const errors = {};
  if (!values.lname) {
    errors.lname = 'Пожалуйста укажите фамилию';
  }
  if (!values.fname) {
    errors.fname = 'Пожалуйста укажите имя';
  }
  if (!values.mname) {
    errors.mname = 'Пожалуйста укажите имя';
  }
  if (!values.email) {
    errors.email = 'Email field shouldn’t be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password field shouldn’t be empty';
  } else if (values.password !== 'dragon') {
    errors.password = 'The password is incorrect'
  }
  if (!values.select) {
    errors.select = 'Please select the option';
  }

  return errors;
};

export default validate;