import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

import PersonalData from './PersonalData';
import PassportData from './PassportData';
import AddressData from './AddressData';
import AnketaPODFT from './AnketaPODFT';
import showResults from './Show';
import UserIcon from 'mdi-react/UserIcon';


export default class InvestorTabs extends PureComponent {



  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <Row className='profile__card tabs tabs--bordered-bottom'>
            <Col xl={3}>
              <Card>
                <CardBody>
                  <Nav tabs>
                    <NavItem>
                      <NavLink

                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => {
                          this.toggle('1');
                        }}
                      >
                        <UserIcon />
                        Персональные данные
                  </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => {
                          this.toggle('2');
                        }}
                      >
                        <UserIcon />
                        Банковские реквизиты
                  </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => {
                          this.toggle('3');
                        }}
                      >
                        <UserIcon />
                        Анкета ПОД/ФТ
                  </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '4' })}
                        onClick={() => {
                          this.toggle('4');
                        }}
                      >
                        <UserIcon />
                        Анкета FATCA
                </NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
            </Col>

            <Col xl={9}
            >
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId='1'>
                  <PersonalData onSubmit={showResults} />
                </TabPane>
                <TabPane tabId='2'>
                  <PassportData onSubmit={showResults} />
                </TabPane>
                <TabPane tabId='3'>
                  <AnketaPODFT onSubmit={showResults} />
                </TabPane>
                <TabPane tabId='4'>
                  <AnketaPODFT onSubmit={showResults} />
                </TabPane>
              </TabContent>
            </Col>

          </Row>
        </Card>
      </Col>
    )
  }
}