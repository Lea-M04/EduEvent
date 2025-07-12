import { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import '../assets/css/styles.css';

function ChatBot() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const firstMsg = {
      from: 'bot',
      text: user
        ? `Hello ${user.username}! 👋 How can I help you today?`
        : 'Hello! 👋 How can I help you today?',
    };
    setMessages([firstMsg]);
  }, [user]);

  const toggleChat = () => setOpen(!open);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getBotReply(input.toLowerCase()) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const getBotReply = (msg) => {
    if (/(hello|hi|hey)/.test(msg)) {
      return user
        ? `Hi ${user.username}! 👋 What can I do for you?`
        : 'Hi there! 👋';
    } else if (/how are you/.test(msg)) {
      return "I'm just a bot, but I'm doing great! 😄";
    } else if (/can i ask/.test(msg)) {
      return "Of course! I'm here to help.";
    } else if (/login|sign in/.test(msg)) {
      return "To login, use the Login page from the menu.";
    } else if (/register|sign up/.test(msg)) {
      return "You can register by going to the Register page.";
    } else if (/event|activity|workshop/.test(msg)) {
      return "Check the Events page for upcoming activities!";
    } else if (/network|meet|students/.test(msg)) {
      return "Visit the Networking section to connect with others.";
    } else if (/dark mode/.test(msg)) {
      return "Click the 🌙 button above to switch dark mode on/off.";
    } else if (/help|support/.test(msg)) {
      return "I'm here to help! Ask anything related to the platform.";
    }

    return "Hmm, I’m not sure I understood. Try asking about login, events, or networking.";
  };

  return (
    <div className="chatbot-container">
      <button onClick={toggleChat} className="chatbot-button">
        {open ? '×' : '💬'}
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="chatbot-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
