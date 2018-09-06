import React, { PureComponent } from 'react';
import { Input } from 'reactstrap';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import EmoticonIcon from 'mdi-react/EmoticonIcon';

export default class ChatField extends PureComponent {
  render() {
    return (
      <div className='chat__text-field'>
        <form className='chat__form'>
          <Input className='chat__field-input' name='chatField' placeholder='Напишите сообщение...' />
          <div className='chat__field-controls'>
            <button className='chat__icon-button' onClick={(e) => {
              e.preventDefault()
            }}>
              <EmoticonIcon />
            </button>
            <button className='chat__icon-button' onClick={(e) => {
              e.preventDefault()
            }}>
              <PaperclipIcon />
            </button>
          </div>
        </form>
      </div>
    )
  }
}