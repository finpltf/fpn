import React, { PureComponent } from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { changeThemeToDark, changeThemeToLight } from '../../../redux/actions/themeActions';
import { connect } from 'react-redux';

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
          <SidebarLink title='Каталог фондов' icon='store' route='/funds' onClick={this.hideSidebar} />
          <SidebarLink title='Компании' icon='apartment' route='/uk' onClick={this.hideSidebar} />
        </ul>

        <ul className='sidebar__block'>
          <SidebarLink title='Ваш портфель' icon='briefcase' route='/dashboard' onClick={this.hideSidebar} />
          <SidebarCategory title='Документы' icon='layers'>
            <SidebarLink title='Приобретение' route='/tables/basic_tables' onClick={this.hideSidebar} />
            <SidebarLink title='Погашение' route='/tables/data_table' onClick={this.hideSidebar} />
            <SidebarLink title='Обмен' route='/tables/data_table' onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>


        <ul className='sidebar__block'>
          <SidebarLink title='Сообщения' route='/mail' icon='envelope' onClick={this.hideSidebar} />
        </ul>



        <ul className='sidebar__block'>
          <SidebarLink title='Анкета инвестора' route='/investor' icon='user' onClick={this.hideSidebar} />
          <SidebarLink title='Настройки' route='/settings' icon='cog' onClick={this.hideSidebar} />
          <SidebarLink title='Выход' route='/logout' icon='exit' onClick={this.hideSidebar} />
        </ul>

        <ul className='sidebar__block'>
          <SidebarLink title='Помощь' icon='heart' route='/faq' onClick={this.hideSidebar} />
        </ul>



      </div>
    )
  }
}

export default connect()(SidebarContent);