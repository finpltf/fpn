import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../containers/_layout';

import Alerts from '../containers/ui/alerts';
import Buttons from '../containers/ui/buttons';
import Carousel from '../containers/ui/carousel';
import Collapse from '../containers/ui/collapse';
import Grids from '../containers/ui/Grids';
import Modals from '../containers/ui/modals';
import Notifications from '../containers/ui/notification';
import Panels from '../containers/ui/panels';
import ProgressBars from '../containers/ui/progress_bars';
import RangeSliders from '../containers/ui/range_sliders';
import Tabs from '../containers/ui/tabs';
import Timeline from '../containers/ui/timeline';
import Tooltips from '../containers/ui/tooltips';

import FundsList from '../containers/funds_list';
import FundPage from '../containers/fund_page';
import uk_page from '../containers/uk_page';


import NotFound404 from '../containers/default_page/404';
import Calendar from '../containers/default_page/calendar';
import FAQ from '../containers/default_page/faq';
import Gallery from '../containers/default_page/gallery';
import Chat from '../containers/chat';
import PricingCards from '../containers/default_page/pricing_cards';
import TextEditor from '../containers/default_page/text_editor';
import InvoiceTemplate from '../containers/default_page/invoice_template';

import Profile from '../containers/account/profile';
import EmailConfirmation from '../containers/account/email_confimation';
import LockScreen from '../containers/account/lock_screen';
import LogIn from '../containers/account/log_in';
import LogInPhoto from '../containers/account/log_in_photo';
import Register from '../containers/account/register';
import RegisterPhoto from '../containers/account/register_photo';

import BasicForm from '../containers/form/basic_form';
import FormDropzone from '../containers/form/form_dropzone';
import FileUpload from '../containers/form/file_upload';
import FormLayouts from '../containers/form/form_layouts';
import CheckFormControls from '../containers/form/check_form_controls';
import FormValidation from '../containers/form/form_validation';
import MaskForm from '../containers/form/mask_form';
import WizardForm from '../containers/form/wizard_form';
import MaterialForm from '../containers/form/material_form';
import InvestorProfile from '../containers/investor';
import FormPicker from '../containers/form/form_picker';

import Recharts from '../containers/charts/recharts';



import Mail from '../containers/mail';

import Introduction from '../containers/documentation/01_introduction';
import Installation from '../containers/documentation/02_installation';
import FileStructure from '../containers/documentation/03_files_structure';
import Components from '../containers/documentation/04_components';
import Form from '../containers/documentation/05_forms';
import ColorThemes from '../containers/documentation/06_change_and_add_color_themes';
import NavigationItem from '../containers/documentation/07_new_navigation_item';
import Resources from '../containers/documentation/08_resources';
import Changelog from '../containers/documentation/09_changelog';

import Dashboard from '../containers/dashboards/main';
import DashboardEdit from '../containers/dashboards/crypto_table_edit';

import Landing from '../containers/landing';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/404' component={NotFound404} />
        <Route path='/lock_screen' component={LockScreen} />
        <Route path='/log_in' component={LogIn} />
        <Route path='/log_in_photo' component={LogInPhoto} />
        <Route path='/register' component={Register} />
        <Route path='/register_photo' component={RegisterPhoto} />
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
      <Route path='/uk_page' component={uk_page} />
      <Route path='/funds' component={Funds} />
      <Route path='/investor' component={InvestorProfile} />
      <Route path='/ui' component={UI} />
      <Route path='/mail' component={Mail} />
      <Route path='/chat' component={Chat} />
      <Route path='/forms' component={Forms} />
      <Route path='/account' component={Account} />
      <Route path='/default_pages' component={DefaultPages} />
      <Route path='/documentation' component={Documentation} />
    </div>
  </div>
);

const Funds = () => (
  <Switch>
    <Route exact path='/funds' component={FundsList} />
    <Route path='/funds/fund_page' component={FundPage} />
  </Switch>
);
const UI = () => (
  <Switch>
    <Route path='/ui/alerts' component={Alerts} />
    <Route path='/ui/buttons' component={Buttons} />
    <Route path='/ui/carousel' component={Carousel} />
    <Route path='/ui/collapse' component={Collapse} />
    <Route path='/ui/grids' component={Grids} />
    <Route path='/ui/modals' component={Modals} />
    <Route path='/ui/notifications' component={Notifications} />
    <Route path='/ui/panels' component={Panels} />
    <Route path='/ui/progress_bars' component={ProgressBars} />
    <Route path='/ui/range_sliders' component={RangeSliders} />
    <Route path='/ui/tabs' component={Tabs} />
    <Route path='/ui/timeline' component={Timeline} />
    <Route path='/ui/tooltips' component={Tooltips} />
  </Switch>
);

const Forms = () => (
  <Switch>
    <Route path='/forms/basic_form' component={BasicForm} />
    <Route path='/forms/check_form_controls' component={CheckFormControls} />
    <Route path='/forms/file_upload' component={FileUpload} />

    <Route path='/forms/form_dropzone' component={FormDropzone} />
    <Route path='/forms/form_layouts' component={FormLayouts} />
    <Route path='/forms/form_picker' component={FormPicker} />
    <Route path='/forms/form_validation' component={FormValidation} />
    <Route path='/forms/mask_form' component={MaskForm} />
    <Route path='/forms/material_form' component={MaterialForm} />
    <Route path='/forms/wizard_form' component={WizardForm} />
  </Switch>
);





const Account = () => (
  <Switch>
    <Route path='/account/profile' component={Profile} />
    <Route path='/account/email_confirmation' component={EmailConfirmation} />
  </Switch>
);

const DefaultPages = () => (
  <Switch>
    <Route path='/default_pages/calendar' component={Calendar} />
    <Route path='/default_pages/faq' component={FAQ} />
    <Route path='/default_pages/gallery' component={Gallery} />
    <Route path='/default_pages/invoice_template' component={InvoiceTemplate} />
    <Route path='/default_pages/pricing_cards' component={PricingCards} />

    <Route path='/default_pages/text_editor' component={TextEditor} />
  </Switch>
);

const Documentation = () => (
  <Switch>
    <Route path='/documentation/introduction' component={Introduction} />
    <Route path='/documentation/installation' component={Installation} />
    <Route path='/documentation/file_structure' component={FileStructure} />
    <Route path='/documentation/components' component={Components} />
    <Route path='/documentation/form' component={Form} />
    <Route path='/documentation/color_themes' component={ColorThemes} />
    <Route path='/documentation/navigation_item' component={NavigationItem} />
    <Route path='/documentation/resources' component={Resources} />
    <Route path='/documentation/changelog' component={Changelog} />
  </Switch>
);

const Dashboards = () => (
  <Switch>
    <Route exact path='/dashboard' component={Dashboard} />
    <Route path='/dashboard/edit/:index' component={DashboardEdit} />
  </Switch>
);


export default Router;
