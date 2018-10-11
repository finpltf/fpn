import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

import PersonalData from './PersonalData';
import FinanceData from './FinanceData';
import FATCAData from './FATCAData';
import showResults from './Show';
import UserIcon from 'mdi-react/UserIcon';
import WalletIcon from 'mdi-react/WalletMembershipIcon';
import LayersIcon from 'mdi-react/LayersIcon';

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
      <Card>
        <Row className='profile__card tabs'>


          <Col xl={3}>
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
                  <WalletIcon />
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
                  <LayersIcon />
                  Анкеты FATCA и ПОДФТ
                  </NavLink>
              </NavItem>

            </Nav>
          </Col>
          <Col xl={9}
          >
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId='1'>
                <PersonalData onSubmit={showResults} />
              </TabPane>
              <TabPane tabId='2'>
                <FinanceData onSubmit={showResults} />
              </TabPane>
              <TabPane tabId='3'>
                <FATCAData onSubmit={showResults} />
              </TabPane>

            </TabContent>
          </Col>

        </Row>
      </Card>
    )
  }
}