import TodoItem from "../TodoItem/TodoItem";
import { useEffect, useState } from "react";
import { getTodos } from "../../api/api";

export default function TodoList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      const Response = await getTodos();
      setItems(Response.data);
    }
    fetchTodos();
  }, []);

  const Items = items.map((item) => <TodoItem Item={item} key={item.id} />);

  return <ul>{Items}</ul>;
}
