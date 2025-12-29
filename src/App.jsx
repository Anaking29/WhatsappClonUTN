import { useState } from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ContactProfile from './components/ContactProfile';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import { chats as initialChats, messages as initialMessages, currentUser } from './data/mockData';

function AppContent() {
  const [activeChatId, setActiveChatId] = useState(null);
  const [view, setView] = useState('chat');
  const [messages, setMessages] = useState(initialMessages);
  const [chats, setChats] = useState(initialChats);

  const activeChat = chats.find(c => c.id === activeChatId);
  const activeMessages = activeChatId ? (messages[activeChatId] || []) : [];

  const handleChatSelect = (id) => {
    setActiveChatId(id);
    setView('chat');
  };

  const handleSendMessage = (text) => {
    if (!activeChatId) return;

    const newMessage = {
      id: Date.now(),
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'me',
      status: 'read'
    };

    setMessages(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage]
    }));


    setChats(prev => {
      const chatIndex = prev.findIndex(c => c.id === activeChatId);
      if (chatIndex === -1) return prev;

      const updatedChat = { ...prev[chatIndex], lastMessage: text, time: 'Now' };
      const newChats = [...prev];
      newChats.splice(chatIndex, 1);
      newChats.unshift(updatedChat);
      return newChats;
    });
  };

  const renderRightPane = () => {
    if (view === 'profile' && activeChat) {
      return <ContactProfile contact={activeChat} onClose={() => setView('chat')} />;
    }
    return (
      <ChatWindow
        chat={activeChat}
        messages={activeMessages}
        onSendMessage={handleSendMessage}
        onOpenProfile={() => setView('profile')}
        onBack={() => setActiveChatId(null)}
      />
    );
  };

  return (
    <Layout
      sidebar={
        <Sidebar
          user={currentUser}
          chats={chats}
          activeChatId={activeChatId}
          onChatSelect={handleChatSelect}
        />
      }
      chat={renderRightPane()}
      isChatActive={!!activeChatId}
    />
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
