import chatroom from './Images/chatroom.webp'
import { useState } from 'react';
import io from 'socket.io-client'
import Chats from './Chats';
const socket = io.connect("http://localhost:9000")

const JoinRoom = () => {


    const [userName, setUserName] = useState("")
    const [room, setRoom] = useState("")
    const [showChat, setShowChat] = useState(false)

    const joinRoom = () => {

        if (userName !== "" && room !== "") {
            socket.emit("JOIN_CHAT_ROOM", room)
            setShowChat (true)
        }
    }

    return (
        <div className="container" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15vh"
        }}>
            {!showChat ? (
                <div class="card shadow-lg" style={{ width: "18rem" }}>
                    <img src={chatroom} class="card-img-top" alt="..." />
                    <h5 class="card-title text-center">JOIN CHAT</h5>
                    <div class="card-body">
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                                onChange={(e) => setUserName(e.target.value)} />
                        </div>

                        <div class="input-group flex-nowrap mt-2">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" class="form-control" placeholder="Room ID" aria-label="Username" aria-describedby="addon-wrapping"
                                onChange={(e) => setRoom(e.target.value)} />
                        </div>

                        <div class="text-center mt-2">
                            <button type="button" class="btn btn-outline-primary"
                                onClick={joinRoom}>JOIN ROOM</button>
                        </div>
                    </div>
                </div>
            )
                :
                (
                    <Chats socket={socket} username={userName} room={room} />
                )}
        </div>
    );
};

export default JoinRoom;
