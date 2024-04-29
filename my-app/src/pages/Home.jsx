// Home.js
import React, { useState } from "react";
import Slidebar from "../component/slidebar";
import Chat from "../component/chat";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("Sidebar State:", isSidebarOpen); // Check the state
    };

    return (
        <div className="home">
            <div className={`container ${isSidebarOpen ? 'active' : ''}`}>
                <Slidebar isSidebarOpen={isSidebarOpen} />
                {/* Pass toggleSidebar to Chat component */}
                <Chat toggleSidebar={toggleSidebar} />
            </div>
        </div>
    );
}

export default Home;
