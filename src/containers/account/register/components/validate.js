const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Без вашего email ну никак нельзя.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный email. Возможно вы опечатались?'
  }
  if (!values.password) {
    errors.password = 'Без пароля не безопасно!';
  } else if (values.password == '12345') {
    errors.password = 'Слишком простой пароль!'
  } else if (values.password == '123') {
    errors.password = 'Ты чё, ебанутый!!!?'
  } else if (values.password == '1234') {
    errors.password = 'Ты чё, ебанутый!!?'
  } else if (values.password == '123456') {
    errors.password = 'Ты чё, ёбнулся!?'
  } else if (values.password == '123456') {
    errors.password = 'Ты чё, ебанутый!?'
  }


  return errors;
};

export default validate;