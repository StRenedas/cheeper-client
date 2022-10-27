import { User } from '../User/User';

import './UsersList.scss';
import { useEffect, useState } from 'react';
import { getFriends, getFriendsCount } from '../../api/api';

function UsersList({ Users, handleSelect, SelectedUser }) {
  const [friends, setFriends] = useState([]);
  const [friendsCount, setFriendsCount] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchFriends() {
    await setLoading(true);
    await setFriends([]);
    await setFriendsCount([]);

    const FriendsResponse = await getFriends({ user_id: SelectedUser });
    const FriendsCountResponse = await getFriendsCount({
      user_id: SelectedUser
    });
    await setFriends(FriendsResponse.data);
    await setFriendsCount(FriendsCountResponse.data);
    await setLoading(false);
  }

  function handleSelectedUser(e) {
    const { value } = e.target;
    handleSelect(Number(value));
  }

  useEffect(() => {
    if (SelectedUser) {
      fetchFriends();
    }
  }, [SelectedUser]);

  const mappedUsers = Users.map((user) => <User User={user} key={user.id} />);
  const mappedFriends = friends.map((friend, index) => <li key={index}>{friend}</li>);
  console.log(loading);
  return (
    <div className={'users'}>
      <select className={'user-list'} onChange={handleSelectedUser}>
        <option value={''} selected={true} disabled={true}>
          Choose a user
        </option>
        {mappedUsers.length ? mappedUsers : <option>No users found</option>}
      </select>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <p>Friends count: {friendsCount}</p>
          <ol>{mappedFriends}</ol>
        </>
      )}
    </div>
  );
}

export { UsersList };
