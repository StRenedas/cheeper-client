import { useState } from 'react';
import './MessageForm.scss';
import { addMessage } from '../../api/api';

export default function MessageForm({ SelectedUser }) {
  const [newMessage, setNewMessage] = useState('');
  function handleFormChange(e) {
    const { value } = e.target;
    setNewMessage(value);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    await addMessage({ message: { userid: SelectedUser, text: newMessage } });
    await setNewMessage('');
  }

  return (
    <form onSubmit={handleFormSubmit} className={'message-add'}>
      <textarea
        placeholder={'Enter new message'}
        name={'text'}
        onChange={handleFormChange}
        value={newMessage}
        className={'message-add__input'}
        disabled={!SelectedUser}
      />
      <button type={'submit'}>Add New Message</button>
    </form>
  );
}
