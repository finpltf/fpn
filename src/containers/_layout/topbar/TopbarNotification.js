import React, { PureComponent } from 'react';
import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import NotificationsIcon from 'mdi-react/NotificationsIcon';

const notifications = [
  {
    ava: process.env.PUBLIC_URL + '/img/topbar/ava.png',
    name: 'ООО УК «Арсагера» ', message: 'Заявка на погашение паёв обработана', date: '09:02'
  },
  {
    ava: process.env.PUBLIC_URL + '/img/topbar/ava2.png',
    name: 'ООО УК «ТФГ ', message: 'Требуется загрузить копию паспорта', date: '09:00'
  },
  {
    ava: process.env.PUBLIC_URL + '/img/topbar/ava3.png',
    name: 'ООО УК «Солид Менеджмент» ', message: 'Вам открыт счёт!', date: '08:43'
  },
  {
    ava: process.env.PUBLIC_URL + '/img/topbar/ava2.png',
    name: 'ООО УК «Инвест менеджмент центр» ', message: 'Паи зачислены', date: '08:43'
  }
];

export default class TopbarNotification extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className='topbar__collapse'>
        <button className='topbar__btn' onClick={this.toggle}>
          <NotificationsIcon />
          <div className='topbar__btn-new-label'>
            <div> 1</div>
          </div>
        </button>
        {this.state.collapse && <div className='topbar__back' onClick={this.toggle} />}
        <Collapse
          isOpen={this.state.collapse}
          className='topbar__collapse-content'
        >
          <div className='topbar__collapse-title-wrap'>
            <p className='topbar__collapse-title'>Уведомления</p>
          </div>
          {notifications.map((notification, index) => (
            <div className='topbar__collapse-item' key={index}>

              <p className='topbar__collapse-message'>
                <span className='topbar__collapse-name'>{notification.name}</span>
                {notification.message}
              </p>
              <p className='topbar__collapse-date'>{notification.date}</p>
            </div>
          ))}
          <Link className='topbar__collapse-link' to='/dashboard'>
            Смотреть все уведомления
          </Link>
        </Collapse>
      </div>
    )
  }
}