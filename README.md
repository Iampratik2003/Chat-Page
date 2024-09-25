Project Overview :

I developed a real-time Chat-Page with an Express.js backend and a React frontend, designed to support both one-on-one and group chats. The backend was built using Express.js and MongoDB, while the frontend utilized React and Chakra UI for a modern and responsive user interface.

Backend Details:

Express.js: Used to create the HTTP server and define API routes.
MongoDB with Mongoose: Mongoose was used to define schemas and models for the application:
User Schema: Fields include name, email, password, and pic (stored in Cloudinary).
Chat Schema: Fields include chatName, isGroupChat, users, latestMessage, and groupAdmin.
Message Schema: Fields include sender, content, and chat.
Authentication: JWT for user authentication and Bcrypt for hashing passwords.
CORS: Configured to allow requests from the frontend running on a different port.
Middleware: Implemented for error handling and route protection.
API Routes:

User Routes: For searching users and handling user operations.
Chat Routes: For accessing and managing chats, including one-on-one and group chats.
Endpoints like accessChat, createGroupChat, renameGroup, and removeFromGroup.
Message Routes: For sending messages in both one-on-one and group chats.
Frontend Details:

React: Built with a component-based architecture.
Chakra UI: Used for styling and responsive design.
State Management: Context API was used to manage the global state.
Pages and Components:
Chat Page UI: Includes components like SideDrawer, MyChats, and ChatBox.
Group Chat UI: Specific UI for handling group chat functionalities.
Real-Time Functionality:

Socket.io: Implemented for real-time messaging, typing indicators, and notifications.
Real-Time Updates: Enabled for seamless user experience in chat and notification features.
Functional Highlights:

One-on-One Chat: Users can initiate and participate in private chats.
Group Chat: Users can create groups, add or remove members, and engage in group conversations.
Typing Indicator: Shows when a user is typing in a chat, making the chat more interactive.
Real-Time Notifications: Added for new messages and activities, enhancing user engagement.

![Screenshot (275)](https://github.com/Iampratik2003/Chat-Page/assets/137315723/7ad172e8-aa9f-441d-a523-1186e72d9f28)
![Screenshot (274)](https://github.com/Iampratik2003/Chat-Page/assets/137315723/439bdfaf-4b7a-47ce-95fe-0a0ce1196463)
