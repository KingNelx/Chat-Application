import { useState } from "react";

const Chats = ({ socketProp, username, room }) => {
    return (
        <div class="chat-container">
            <div class="chat-header bg-light">
                <h4 class="m-0">Chat Title</h4>
                <button type="button" class="btn btn-sm btn-outline-secondary">Leave Chat</button>
            </div>
            <div class="chat-body">
                <div class="message">
                    <div class="message-sender">
                        <img src="https://via.placeholder.com/36" class="rounded-circle mr-2" /> Sender Name
                        <span class="message-time float-right">12:34 PM</span>
                    </div>
                    <div class="message-content">Message text goes here.</div>
                </div>

            </div>
            <div class="chat-footer">
                <form class="form-inline">
                    <div class="form-group flex-grow-1 mr-2">
                        <input type="text" class="form-control w-100" placeholder="Type your message here..." />
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
        </div>

    );
}

export default Chats;