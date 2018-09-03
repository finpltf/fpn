import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './sidebar/Sidebar';
import SidebarMobile from './topbar_with_navigation/sidebar_mobile/SidebarMobile';
import NotificationSystem from 'rc-notification';
import {BasicNotification} from '../../components/Notification';

let notification = null;
NotificationSystem.newInstance({}, (n) => notification = n);

const showNotification = () => {
  notification.notice({
    content: <BasicNotification title='👋 Добро пожаловать на Финансовую Платформу!'
                                message='You have successfully registered in the EasyDev. Now you can start to explore the dashboard
                interface with a bunch of components and applications. Enjoy!'/>,
    duration: 5,
    closable: true,
    style: {top: 0, left: 'calc(100vw - 100%)'},
    className: 'right-up'
  });
};

class Layout extends PureComponent {

  componentDidMount() {
    setTimeout(() => showNotification(), 700);
  };

  componentWillUnmount() {
    notification.destroy();
  };

  render() {
    return (
      <div>
        {this.props.customizer.topNavigation ?
          <TopbarWithNavigation/> :
          <Topbar/>
        }
        {this.props.customizer.topNavigation ?
          <SidebarMobile/> :
          <Sidebar/>
        }
      </div>
    )
  }
}

export default connect(state => {
  return {
    customizer: state.customizer
  }
})(Layout);