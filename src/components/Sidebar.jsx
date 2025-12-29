import React from 'react';
import './Sidebar.css';
import { useTheme } from '../ThemeContext';

const Sidebar = ({ user, chats, activeChatId, onChatSelect }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="sidebar-container">

            <div className="nav-rail">
                <div className="nav-top">
                    <button className="nav-btn active" title="Chats">
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg>
                    </button>
                    <button className="nav-btn" title="Notificaciones">
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
                    </button>
                    <button className="nav-btn" title="Estados">
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"></circle></svg>
                    </button>
                </div>
                <div className="nav-bottom">
                    <button className="nav-btn" title="Cambiar tema" onClick={toggleTheme}>
                        {theme === 'light' ? (

                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        ) : (

                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        )}
                    </button>
                    <button className="nav-btn" title="Configuración">
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.58 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>
                    </button>
                    <div className="user-avatar-small">
                        <img src={user.avatar} alt={user.name} />
                    </div>
                </div>
            </div>


            <div className="sidebar-pane-content">
                <header className="sidebar-header-new">
                    <h2>Chats</h2>
                    <div className="header-actions-new">
                        <button className="icon-btn" title="Nuevo chat">
                            <svg viewBox="0 0 24 24" width="20" height="20" className=""><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3.987-3.708H7.041V7.4h10.962v1.936z"></path></svg>
                        </button>
                        <button className="icon-btn" title="Menú">
                            <svg viewBox="0 0 24 24" width="20" height="20" className=""><path fill="currentColor" d="M10 12c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2zm-6 0c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2zm12 0c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2-2 .895-2 2z" transform="rotate(90 12 12)"></path></svg>
                        </button>
                    </div>
                </header>

                <div className="search-container-new">
                    <div className="search-bar">
                        <div className="search-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" className=""><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                        </div>
                        <input type="text" placeholder="Buscar un chat o iniciar uno nuevo" />
                    </div>
                    <button className="filter-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20" className=""><path fill="currentColor" d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path></svg>
                    </button>
                </div>

                <div className="chat-list">
                    {chats.map(chat => (
                        <div
                            key={chat.id}
                            className={`chat-item ${chat.id === activeChatId ? 'active' : ''}`}
                            onClick={() => onChatSelect(chat.id)}
                        >
                            <div className="chat-avatar">
                                <img src={chat.avatar} alt={chat.name} />
                            </div>
                            <div className="chat-info">
                                <div className="chat-item-header">
                                    <span className="chat-name">{chat.name}</span>
                                    <span className="chat-time">{chat.time}</span>
                                </div>
                                <div className="chat-preview">
                                    <div className="last-message">
                                        <span>{chat.lastMessage}</span>
                                    </div>
                                    {chat.unread > 0 && (
                                        <span className="unread-badge">{chat.unread}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
