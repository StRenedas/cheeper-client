import { useState } from "react";
import "./MessageForm.scss";
import { addMessage } from "../../api/api";

export default function MessageForm({ SelectedUser }) {
  const [newMessage, setNewMessage] = useState({
    userid: SelectedUser,
    text: "",
  });
  console.log(SelectedUser);
  console.log(newMessage);
  function handleFormChange(e) {
    setNewMessage((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    await addMessage({ message: newMessage });
    await setNewMessage({ userid: SelectedUser, text: "" });
  }

  return (
    <form onSubmit={handleFormSubmit} className={"message-add"}>
      <textarea
        placeholder={"Enter new message"}
        name={"text"}
        onChange={handleFormChange}
        value={newMessage.text}
        className={"message-add__input"}
      />
      <button type={"submit"}>Add New Message</button>
    </form>
  );
}
