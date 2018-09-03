import React, {PureComponent} from 'react';
import {Col, Card, Row} from 'reactstrap';
import WizardForm1 from './WizardForm1';
import WizardForm2 from './WizardForm2';
import WizardForm3 from './WizardForm3';
import WizardForm4 from './WizardForm4';

export default class WizardForm extends PureComponent {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  
  nextPage() {
    this.setState({page: this.state.page + 1});
  }
  
  previousPage() {
    this.setState({page: this.state.page - 1});
  }
  
  render() {
    const {onSubmit} = this.props;
    const {page} = this.state;
    
    return (
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <div className='wizard'>
              <div className='wizard__steps'>
                <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Шаг  1</p></div>
                <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Шаг  2</p></div>
                <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Шаг  3</p></div>
                <div className={`wizard__step${page === 4 ? ' wizard__step--active' : ''}`}><p>Шаг  4</p></div>
              </div>
              <div className='wizard__form-wrapper'>
                {page === 1 && <WizardForm1 onSubmit={this.nextPage}/>}
                {page === 2 &&
                <WizardForm2
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}
                />}
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
          </Card>
        </Col>
      </Row>
    )
  }
}

