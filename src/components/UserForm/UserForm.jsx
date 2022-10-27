import { useState } from 'react';
import './UserForm.scss';
import { addUser } from '../../api/api';

function UserForm({ handleAdd }) {
  const [newUser, setNewUser] = useState({ name: '', nickname: '' });

  function handleFormChange(e) {
    setNewUser((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    await addUser({ user: newUser });
    await setNewUser({ name: '', nickname: '' });
    await handleAdd();
  }

  return (
    <form onSubmit={handleFormSubmit} className={'user-add'}>
      <input
        type="text"
        placeholder={'Enter Name'}
        name={'name'}
        onChange={handleFormChange}
        value={newUser.name}
        className={'user-add__input'}
      />
      <input
        type="text"
        placeholder={'Enter Nickname'}
        name={'nickname'}
        onChange={handleFormChange}
        value={newUser.nickname}
        className={'user-add__input'}
      />
      <button type={'submit'}>Add New User</button>
    </form>
  );
}

export { UserForm };
