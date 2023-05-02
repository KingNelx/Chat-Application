const express = require('express');
const app = express();
const http = require("http");
const cors = require("cors");
// Server class come fome socket io library
const { Server } = require("socket.io")

app.use(cors());
const server = http.createServer(app);

const connectionIO = new Server(server,
    {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
        },
    });

connectionIO.on("connection", (socketIO) => {
    console.log(`User Connected: ${socketIO.id}`);
    socketIO.on("JOIN_CHAT_ROOM", (data) => {
        socketIO.join(data)
        console.log(`User with ID: ${socketIO.id}, Joined room: ${data} `)
    })
    socketIO.on("send_message", (data) => {
        socketIO.to(data.room).emit("receive_message",data)
    })
    socketIO.on("disconnect", () => {
        console.log(" USER GOT DISCONNECTED ", socketIO.id)
    });
});

server.listen(9000, () => {
    console.log(" SERVER IS UP ")
})