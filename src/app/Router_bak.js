import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../containers/_layout';

import FundsList from '../containers/funds_list';
import FundPage from '../containers/fund_page';
import UkList from '../containers/uk_list';
import UkPage from '../containers/uk_page';

import InvestorProfile from '../containers/investor';
import Settings from '../containers/settings';


import Mail from '../containers/mail';


import Dashboard from '../containers/dashboards/main';
import DashboardEdit from '../containers/dashboards/crypto_table_edit';

import Landing from '../containers/landing';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/404' component={NotFound404} />
        <Route path='/' component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className='container__wrap'>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/uk' component={Uk} />
      <Route path='/funds' component={Funds} />
      <Route path='/investor' component={InvestorProfile} />
      <Route path='/settings' component={Settings} />
      <Route path='/mail' component={Mail} />
      <Route path='/chat' component={Chat} />
      <Route path='/account' component={Account} />
    </div>
  </div>
);

const Uk = () => (
  <Switch>
    <Route exact path='/uk' component={UkList} />
    <Route path='/uk/uk_page' component={UkPage} />
  </Switch>
);
const Funds = () => (
  <Switch>
    <Route exact path='/funds' component={FundsList} />
    <Route path='/funds/fund_page' component={FundPage} />
  </Switch>
);


const Dashboards = () => (
  <Switch>
    <Route exact path='/dashboard' component={Dashboard} />
    <Route path='/dashboard/edit/:index' component={DashboardEdit} />
  </Switch>
);


export default Router;
