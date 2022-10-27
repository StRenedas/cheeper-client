import { useEffect, useState } from "react";
import { getMessages } from "../../api/api";
import "./UserMessages.scss";
export default function UserMessages({ SelectedUser }) {
  const [messages, setMessages] = useState([]);
  const [dates, setDates] = useState({ from: "", to: "" });
  async function fetchMessages(data) {
    const Response = await getMessages(data);
    setMessages(Response.data);
  }

  const mappedMessages = messages.map((message, index) => (
    <li key={index} className={"messages-list__item"}>
      {message.message}
    </li>
  ));

  function handleDateChange(e) {
    setDates((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: new Date(value).toISOString() };
    });
  }

  useEffect(() => {
    if (dates.from && dates.to) {
      fetchMessages({
        user_id: SelectedUser,
        dates,
      });
    }
  }, [SelectedUser, dates]);

  return (
    <div className={"messages-form"}>
      <input type="date" name={"from"} onChange={handleDateChange} />
      <input type="date" name={"to"} onChange={handleDateChange} />
      <ol
        className={`messages-list ${
          mappedMessages.length ? "messages-list-yes" : "messages-list-no"
        }`}
      >
        {mappedMessages.length ? (
          mappedMessages
        ) : (
          <li>This user's got no messages</li>
        )}
      </ol>
    </div>
  );
}
