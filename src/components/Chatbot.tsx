'use client';
import { useState, useRef, useEffect } from 'react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const predefinedResponses = {
  greeting: "Hello, I'm here to help you with funeral arrangements and services. How can I assist you today?",
  services: "We offer a comprehensive range of funeral services including traditional ceremonies, cremation services, memorial planning, and grief counseling. What specific service would you like to know more about?",
  pricing: "Our services are tailored to each family's needs. We offer various packages starting from basic services to full-service arrangements. Would you like to schedule a consultation to discuss pricing in detail?",
  location: "Our main facility is located in Haatso. We serve all surrounding areas and can arrange services at your preferred location. Would you like our detailed address?",
  default: "I understand this is a sensitive time. I'm here to help answer any questions you have about our services.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: predefinedResponses.greeting,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      let responseText = predefinedResponses.default;
      
      // Simple keyword matching
      if (inputValue.toLowerCase().includes('service')) {
        responseText = predefinedResponses.services;
      } else if (inputValue.toLowerCase().includes('price') || inputValue.toLowerCase().includes('cost')) {
        responseText = predefinedResponses.pricing;
      } else if (inputValue.toLowerCase().includes('location') || inputValue.toLowerCase().includes('where')) {
        responseText = predefinedResponses.location;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-700 hover:bg-purple-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="bg-[#070B0D] border border-purple-700/20 rounded-lg shadow-xl w-96 h-[32rem] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-purple-700/20 flex justify-between items-center">
            <h3 className="text-white font-semibold">Transitions Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-purple-700 text-white'
                      : 'bg-gray-800 text-gray-200'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs opacity-50 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-purple-700/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <button
                onClick={handleSend}
                className="bg-purple-700 hover:bg-purple-600 text-white rounded-lg px-4 py-2 transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
