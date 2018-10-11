import React, { PureComponent } from 'react';
import { Col, Card, Row } from 'reactstrap';
import RegisterForm from './RegisterForm';
import ConfirmPhone from './ConfirmPhone';
import WizardForm2 from './WizardForm2';
import WizardForm3 from './WizardForm3';
import WizardForm4 from './WizardForm4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotificationSystem from 'rc-notification';
import { BasicNotification } from '../../../../components/Notification';

let notification = null;
NotificationSystem.newInstance({}, (n) => notification = n);


export default class WizardForm extends PureComponent {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.notifyNextPage = this.notifyNextPage.bind(this);
    this.state = {
      page: 1,
      notify: 0,
    };
  }


  // notify = () => this.toastId = toast("Телефон подтверждён", { autoClose: 8000, draggable: true, type: 'success', newestOnTop: true, hideProgressBar: true });

  notify = () => {
    notification.notice({
      content: <BasicNotification title='Телефон подтверждён 👍'
        message='Вы — молодец. Теперь никто кроме вас не сможет использовать телефон для подтверждения операций.' />,
      duration: 5,
      closable: true,
      style: { top: 35, left: 'calc(100vw - 90%)' },
      className: 'right-up'
    });
  };
  componentDidMount() {

  };


  componentWillUnmount() {
    notification.destroy();
  };

  nextPage() {
    this.setState({ page: this.state.page + 1 });

  }
  notifyNextPage() {
    this.notify();
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });

  }



  render() {

    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <div className='wizard__steps hide'>
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>1</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>2</p></div>
              <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>3</p></div>
              <div className={`wizard__step${page === 4 ? ' wizard__step--active' : ''}`}><p>4</p></div>
            </div>

            <div className='wizard '>
              <div className='wizard__form-wrapper'>
                {page === 1 && <RegisterForm onSubmit={this.nextPage} />}
                {page === 2 &&
                  <ConfirmPhone
                    previousPage={this.previousPage}
                    onSubmit={this.notifyNextPage}
                  />
                }
                {page === 3 &&
                  <WizardForm3
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />}
                {page === 4 &&
                  <WizardForm4
                    previousPage={this.previousPage}
                    onSubmit={onSubmit}
                  />}
              </div>
            </div>
            <ToastContainer />
          </Card>


        </Col>
      </Row>
    )
  }
}

