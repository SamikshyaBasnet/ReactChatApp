// import React from 'react';
// import { ChatEngine } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';

// import './App.css';
// import LoginForm from './components/LoginForm';

// function App() {

//   if (!localStorage.getItem('username: ')) return <LoginForm />;

//   return (
//     <>
//       <ChatEngine
//         height="100vh"
//         projectID="4dd2a19b-2ecc-4352-8cfe-80debb0446b6"
//         userName={localStorage.getItem('username')}
//         userSecret={localStorage.getItem('password')}
//         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//       />
//     </>
//   );
// }

// export default App;

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '4dd2a19b-2ecc-4352-8cfe-80debb0446b6';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
