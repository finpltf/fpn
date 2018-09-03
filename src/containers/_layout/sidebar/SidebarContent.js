import React, {PureComponent} from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import {changeThemeToDark, changeThemeToLight} from '../../../redux/actions/themeActions';
import {connect} from 'react-redux';

class SidebarContent extends PureComponent {
  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
    this.hideSidebar();
  };
  
  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
    this.hideSidebar();
  };
  
  hideSidebar = () => {
    this.props.onClick();
  };
  
  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title='Личный кабинет' icon='home' route='/dashboard_crypto' onClick={this.hideSidebar}/>
          <SidebarLink title='Витрина ПИФ'icon='cart' route='/ui/funds' onClick={this.hideSidebar}/>
          <SidebarCategory title='Мой портфель' icon='briefcase'>
                    
                    <SidebarLink title='Мои фонды' route='/tables/basic_tables' onClick={this.hideSidebar}/>
                    <SidebarLink title='Личные финансы' route='/ui/funds' onClick={this.hideSidebar}/>
                    <SidebarLink title='Избранное' route='/tables/data_table' onClick={this.hideSidebar}/>
          </SidebarCategory>
              




          <SidebarCategory title='Заявки' icon='list'>                    
                    <SidebarLink title='Приобретение' route='/tables/basic_tables' onClick={this.hideSidebar}/>
                    <SidebarLink title='Погашение' route='/tables/data_table' onClick={this.hideSidebar}/>
                    <SidebarLink title='Обмен' route='/tables/data_table' onClick={this.hideSidebar}/>
          </SidebarCategory>



 

        </ul>

        <ul className='sidebar__block'>
          <SidebarCategory title='Аккаунт' icon='user'>
          <SidebarLink title='Анкета инвестора' route='/forms/floating_labels_form' onClick={this.hideSidebar}/>
          <SidebarLink title='Настройки' route='/mail' onClick={this.hideSidebar}/>          


          </SidebarCategory>

          
        


  

                      <SidebarCategory title='Помощь' icon='text-align-justify'>
                        <SidebarLink title='FAQs' route='/default_pages/faq' onClick={this.hideSidebar}/>
                        <SidebarLink title='Справка'  route='/documentation/introduction' onClick={this.hideSidebar}/>
            </SidebarCategory>

          
        </ul>
        <ul className='sidebar__block'>
          <SidebarLink title='Выход' icon='exit' route='/log_in'/>
        </ul>

      </div>
    )
  }
}

export default connect()(SidebarContent);