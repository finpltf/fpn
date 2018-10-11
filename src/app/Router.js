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
import FAQ from '../containers/faq';


import Mail from '../containers/mail';

import Registration from '../containers/account/register';
import Login from '../containers/account/log_in';
import Dashboard from '../containers/dashboards/main';

import Landing from '../containers/landing';


import FormValidation from '../containers/form_validation';


const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
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
      <Route path='/registration' component={Registration} />
      <Route path='/login' component={Login} />
      <Route path='/uk' component={Uk} />
      <Route path='/funds' component={Funds} />
      <Route path='/investor' component={InvestorProfile} />
      <Route path='/settings' component={Settings} />
      <Route path='/mail' component={Mail} />
      <Route path='/faq' component={FAQ} />
      <Route path="/form" component={FormValidation} />
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
  </Switch>
);


export default Router;

