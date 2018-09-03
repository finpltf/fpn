import React, {PureComponent} from 'react';
import LockScreenForm from './components/LockScreenForm';

const Ava = process.env.PUBLIC_URL + '/img/11.png';

export default class LockScreen extends PureComponent {
  
  render() {
    return (
      <div className='account'>
        <div className='account__wrapper'>
          <div className='account__card'>
 
            <LockScreenForm onSubmit/>
          </div>
        </div>
      </div>
    )
  }
}