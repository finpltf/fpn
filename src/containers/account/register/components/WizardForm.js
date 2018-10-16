import React, { PureComponent } from 'react';
import { Col, Card, Row } from 'reactstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import EmailVerifyed from './EmailVerifyed';
import PhoneVerifyed from './PhoneVerifyed';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

import PropTypes from 'prop-types';



export default class WizardForm extends PureComponent {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
      values: props.initialValues || {}
    };
  }


  componentDidMount() {

  };



  nextPage() {
    this.setState({ page: this.state.page + 1 });
    console.log(`Вы отправили:\n\n${JSON.stringify(this.state, null, 2)}`);
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
    console.log(`Вы вернулись назад :\n\n${JSON.stringify(this.state, null, 2)}`);

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
                {page === 1 && <Step1 onSubmit={this.nextPage} />}
                {page === 2 &&
                  <Step2
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />
                }
                {page === 3 &&
                  <EmailVerifyed
                    onSubmit={this.nextPage}
                    previousPage={this.previousPage}
                  />
                }
                {page === 4 &&
                  <Step3
                    previousPage={this.previousPage}
                    onSubmit={this.nextPage}
                  />}
                {page === 5 &&
                  <PhoneVerifyed
                    onSubmit={this.nextPage}
                  />}
                {page === 6 &&
                  <Step4
                    previousPage={this.previousPage}
                    onSubmit={onSubmit}
                  />}
              </div>
            </div>
          </Card>


        </Col>
      </Row>
    )
  }
}
WizardForm.propTypes = {
  t: PropTypes.func.isRequired,
};
