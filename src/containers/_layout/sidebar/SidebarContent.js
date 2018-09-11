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


          <SidebarLink title='Главная' icon='home' route='/dashboard' onClick={this.hideSidebar} />
          <SidebarLink title='Все фонды' icon='cart' route='/funds' onClick={this.hideSidebar} />
          <SidebarLink title='Портфель' icon='briefcase' route='/funds' onClick={this.hideSidebar} />
          <SidebarCategory title='Заявки' icon='list'>
            <SidebarLink title='Приобретение' route='/tables/basic_tables' onClick={this.hideSidebar} />
            <SidebarLink title='Погашение' route='/tables/data_table' onClick={this.hideSidebar} />
            <SidebarLink title='Обмен' route='/tables/data_table' onClick={this.hideSidebar} />
          </SidebarCategory>

        </ul>


        <ul className='sidebar__block'>
          <SidebarLink title='Сообщения' route='/chat' icon='cart' onClick={this.hideSidebar} />

       

          <SidebarLink title='Помощь' icon='text-align-justify' route='/default_pages/faq' onClick={this.hideSidebar} />

          <SidebarCategory title='Личный кабинет' icon='home'>
            <SidebarLink title='Рабочий стол' route='/dashboard' onClick={this.hideSidebar} />
            <SidebarLink title='Лента новостей' route='/news' onClick={this.hideSidebar} />
          </SidebarCategory>


          <SidebarCategory title='Аккаунт' icon='user'>
            <SidebarLink title='Анкета инвестора' route='/investor' onClick={this.hideSidebar} />
            <SidebarLink title='Настройки' route='/mail' onClick={this.hideSidebar} />


          </SidebarCategory>

        </ul>

        <ul className='sidebar__block'>
          <SidebarLink title='Выход' icon='exit' route='/log_in' />
        </ul>

        
          <SidebarCategory title='Мой портфель' icon='briefcase'>

            <SidebarLink title='Мои фонды' route='/tables/basic_tables' onClick={this.hideSidebar} />
            <SidebarLink title='Личные финансы' route='/funds' onClick={this.hideSidebar} />
            <SidebarLink title='Избранное' route='/tables/data_table' onClick={this.hideSidebar} />
          </SidebarCategory>




          <SidebarCategory title='Помощь' icon='text-align-justify'>

            <SidebarLink title='Справка' route='/documentation/introduction' onClick={this.hideSidebar} />
            <SidebarLink title='Служба поддержки' route='/documentation/introduction' onClick={this.hideSidebar} />
          </SidebarCategory>


 

      </div>
    )
  }
}

export default connect()(SidebarContent);