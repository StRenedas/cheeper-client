import './App.scss';
import UsersList from '../UserList/UsersList';
import UserMessages from '../UserMessages/UserMessages';
import UserForm from '../UserForm/UserForm';
import { useEffect, useState } from 'react';
import { getUsers } from '../../api/api';
import MessageForm from '../MessageForm/MessageForm';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);

  async function fetchUsers() {
    const Response = await getUsers();
    setUsers(Response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className={'dashboard'}>
      <UsersList
        Users={users}
        handleSelect={setSelectedUser}
        SelectedUser={selectedUser}></UsersList>
      <UserMessages SelectedUser={selectedUser} />
      <UserForm handleAdd={fetchUsers}></UserForm>
      <MessageForm SelectedUser={selectedUser}></MessageForm>
    </main>
  );
}

export default App;
