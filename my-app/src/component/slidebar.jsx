import React from 'react';
import Navbar from "./navbar";
import Search from "./search";
import Chats from "./chats";

const Slidebar = ({ isSidebarOpen }) => {
    return (
        <div className={`slidebar ${isSidebarOpen ? 'active' : ''}`}>
            <Navbar />
            <Search />
            <Chats />
        </div>
    );
};

export default Slidebar;
