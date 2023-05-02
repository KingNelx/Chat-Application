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
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });

connectionIO.on("connection", (socketIO) => { 
    console.log(`User Connected: ${socketIO.id}`);
    socketIO.on("disconnect", () => {
        console.log(" USER GOT DISCONNECTED ", socketIO.id)
    });
});

server.listen(8001, () => {
    console.log(" SERVER IS UP ")
})