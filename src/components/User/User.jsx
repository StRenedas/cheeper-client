function User({ User }) {
  return (
    <option className={'user-list__user'} value={User.id}>
      {User.id} - {User.nickname} - {User.name}
    </option>
  );
}

export { User };
