function TodoItem({ Item }) {
  return (
    <li>
      <span>{Item.task}</span>
      <input type="checkbox" defaultChecked={Item.isDone} />
    </li>
  );
}

export default TodoItem;
