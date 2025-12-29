import React from 'react';
import './Layout.css';

const Layout = ({ sidebar, chat, isChatActive }) => {
    return (
        <div className="app-container">
            <div className="app-content">
                <aside className={`sidebar-pane ${isChatActive ? 'mobile-hidden' : ''}`}>
                    {sidebar}
                </aside>
                <main className={`chat-pane ${!isChatActive ? 'mobile-hidden' : ''}`}>
                    {chat}
                </main>
            </div>
        </div>
    );
};

export default Layout;
