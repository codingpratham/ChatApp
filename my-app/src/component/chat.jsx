// Chat.js
import React from 'react';
import Cam from '../img/video-camera.png';
import Add from '../img/add-friend.png';
import More from '../img/more.png';
import Messages from './messages';
import Input from './input';

const Chat = ({ toggleSidebar }) => {
  const handleClick = () => {
    console.log('Toggle button clicked');
    toggleSidebar(); // Ensure toggleSidebar is called
  };

  return (
    <div className='chat'>
      <div className="chatinfo">
        <span id="name">jane</span>
        <div className="chaticons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
          {/* Toggle button added here */}
          <button className="toggle-button" onClick={handleClick}>Chats</button>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
