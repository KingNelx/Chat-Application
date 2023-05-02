# Chat-Application
SocketIO - ReactJs - NodeJS - Bootstrap

React Chat Room Application
This is a simple chat room application built using React and Socket.IO. It allows users to send and receive messages in real-time. The app uses Socket.IO to handle real-time communication between clients and the server.

Technologies Used

React
Socket.IO
Installation
To run the app locally, follow these steps:

Clone the repository to your local machine
Install the dependencies by running npm install in the root directory of the project
Start the app by running npm start
Open http://localhost:3000 in your browser
Usage
Once the app is running, you can join an existing chat room by entering a username and a room ID. You can then start sending and receiving messages in the chat room.

Components
JoinRoom
The JoinRoom component is the entry point to the app. It renders a form where the user can enter their username and the room ID they want to join. Once the user clicks the "Join Room" button, the component emits a JOIN_CHAT_ROOM event using Socket.IO and renders the Chats component.

Chats
The Chats component is responsible for rendering the chat room interface and handling user input. It takes three props: socket, username, and room.

Props

socket: The Socket.IO socket object
username: The username of the current user
room: The name of the chat room
State

currentChat: The current message being typed by the user
messageList: The list of messages in the chat room
Methods

sendMessage: Sends the current message to the server using the send_message event
Lifecycle

useEffect: Registers an event listener for the receive_message event and updates the messageList state whenever a new message is received. Also unregisters the event listener when the component unmounts.
Message
The Message component is responsible for rendering a single message in the chat room. It takes one prop: message.

Props

message: The message object to be displayed
Dependencies
This app uses the following dependencies:

socket.io-client: The client library for Socket.IO
react: The core React library
react-dom: The DOM renderer for React
react-scripts: A set of scripts and configuration files for React projects
To get started, clone the repository and run npm install to install the dependencies. Then run npm start to start the development server. Open http://localhost:3000 in your browser to see the app.
