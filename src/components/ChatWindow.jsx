import React, { useEffect, useRef } from 'react';
import './ChatWindow.css';

const Message = ({ text, time, isSent, status }) => {
    return (
        <div className={`message ${isSent ? 'message-out' : 'message-in'}`}>
            <div className="message-content">
                <span className="message-text">{text}</span>
                <div className="message-meta">
                    <span className="message-time">{time}</span>
                    {isSent && (
                        <span className="message-status">

                            {status === 'read' ? (
                                <svg viewBox="0 0 16 11" width="16" height="11" className=""><path fill="#53bdeb" d="M11.006 1.106l-5.32 8.783L.908 5.756.976 4.39l4.084 3.033 4.885-7.72c.328-.533 2.112 1.403 1.06 1.403zm4.086 0l-5.321 8.783-.987-1.42 5.25-7.363c.334-.533 2.118 1.403 1.058 1.403z"></path></svg>
                            ) : (
                                <svg viewBox="0 0 16 11" width="16" height="11" className=""><path fill="currentColor" d="M11.006 1.106l-5.32 8.783L.908 5.756.976 4.39l4.084 3.033 4.885-7.72c.328-.533 2.112 1.403 1.06 1.403zm4.086 0l-5.321 8.783-.987-1.42 5.25-7.363c.334-.533 2.118 1.403 1.058 1.403z"></path></svg>
                            )}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const ChatWindow = ({ chat, messages, onSendMessage, onOpenProfile, onBack }) => {
    const [inputText, setInputText] = React.useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText('');
        }
    };

    if (!chat) {
        return (
            <div className="chat-window-placeholder">
                <div className="placeholder-content">

                    <svg viewBox="0 0 24 24" width="70" height="70" className="" fill="currentColor" style={{ color: 'var(--icon-color)', opacity: 0.3, marginBottom: '20px' }}>
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                    <h1>WhatsApp para Windows</h1>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Envía y recibe mensajes sin mantener tu teléfono conectado.</p>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.</p>
                    <div style={{ marginTop: '40px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                        <svg viewBox="0 0 10 12" width="10" height="12"><path fill="currentColor" d="M5 0C2.2 0 0 2.2 0 5v1h1V5c0-2.2 1.8-4 4-4s4 1.8 4 4v1h1V5c0-2.8-2.2-5-5-5zm-4 7v5h8V7H1z"></path></svg>
                        Cifrado de extremo a extremo
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="chat-window">
            <header className="chat-header" onClick={onOpenProfile} style={{ cursor: 'pointer' }}>
                <button className="back-btn" onClick={(e) => { e.stopPropagation(); onBack(); }} title="Volver">
                    <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                </button>
                <div className="chat-avatar">
                    <img src={chat.avatar} alt={chat.name} />
                </div>
                <div className="chat-info">
                    <div className="chat-name">{chat.name}</div>
                    <div className="chat-status">últ. vez {chat.time}</div>
                </div>
                <div className="header-actions">

                    <button className="icon-btn" onClick={(e) => { e.stopPropagation(); }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.9l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
                    </button>
                    <button className="icon-btn" onClick={(e) => { e.stopPropagation(); }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                    </button>
                </div>
            </header>

            <div className="messages-container">
                <div className="app-wallpaper"></div>
                <div className="message-list">
                    {messages.map((msg) => (
                        <Message
                            key={msg.id}
                            text={msg.text}
                            time={msg.timestamp}
                            isSent={msg.sender === 'me'}
                            status={msg.status}
                        />
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            <footer className="chat-footer">
                <div className="footer-actions">
                    <button className="icon-btn"><svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.066 3.447-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg></button>
                    <button className="icon-btn" title="Adjuntar">
                        <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                    </button>
                </div>
                <form className="input-bar" onSubmit={handleSend}>
                    <input
                        type="text"
                        placeholder="Escribe un mensaje"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </form>
                <div className="footer-actions">
                    {inputText ? (
                        <button className="icon-btn" onClick={handleSend}><svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></button>
                    ) : (
                        <button className="icon-btn"><svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.236-3.531h-.941c0 2.925-2.367 5.292-5.295 5.292s-5.295-2.367-5.295-5.292h-.941c0 3.228 2.454 5.88 5.568 6.183v2.793h1.332v-2.793c3.111-.303 5.572-2.955 5.572-6.183z"></path></svg></button>
                    )}
                </div>
            </footer>
        </div>
    );
};

export default ChatWindow;
