import { useState, useEffect } from "react";
import avatar from './Images/avatar.webp'
const Chats = ({ socket, username, room }) => {


    const [currentChat, setCurrentChat] = useState("")
    const [messageList, setMessageList] = useState([]);
    const sendMessage = async (event) => {
        event.preventDefault();
        if (currentChat !== "") {
            const chatData = {
                room: room,
                author: username,
                chat: currentChat,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message", chatData)
            setMessageList((list) => [...list, chatData]);
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
        return () => {
            socket.off("receive_message");
        };
    }, [socket]);
    

      return (
        <div className="chat-container">
          <div className="chat-header bg-light d-flex justify-content-between align-items-center py-2 px-3">
            <h4 className="m-0">Chat Title</h4>
            <button type="button" className="btn btn-sm btn-outline-secondary">Leave Chat</button>
          </div>
          <div className="chat-body p-3">
            {messageList.map((message, index) => (
              <div key={index} className="message mb-3">
                <div className="message-sender d-flex align-items-center mb-2">
                <img src={avatar} className="rounded-circle mr-2" alt="Sender Avatar" style={{ width: '36px', height: '36px' }} />
                  <span className="font-weight-bold mx-2">{ message.author }</span>
                  <span className="message-time ml-auto">{ message.time }</span>
                </div>
                <div className="message-content">{message.chat}</div>
              </div>
            ))}
          </div>
          <div className="chat-footer p-3">
            <form className="form-inline">
              <div className="form-group flex-grow-1 mr-2">
                <input type="text" className="form-control w-100" placeholder="Type your message here..." onChange={(e) => setCurrentChat(e.target.value)} />
              </div>
              <button className="btn btn-primary mt-3" onClick={sendMessage}>Send</button>
            </form>
          </div>
        </div>
      );
      
}

export default Chats;