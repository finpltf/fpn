import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './sidebar/Sidebar';
import SidebarMobile from './topbar_with_navigation/sidebar_mobile/SidebarMobile';




class Layout extends PureComponent {


  render() {
    return (
      <div>
        {this.props.customizer.topNavigation ?
          <TopbarWithNavigation /> :
          <Topbar />
        }
        {this.props.customizer.topNavigation ?
          <SidebarMobile /> :
          <Sidebar />
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