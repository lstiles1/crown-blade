import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage, BusinessConfig } from '../types';
import { generateAiResponse } from '../services/gemini';

interface AiReceptionistProps {
  businessConfig: BusinessConfig;
}

const AiReceptionist: React.FC<AiReceptionistProps> = ({ businessConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Yo! Welcome to ${businessConfig.name}. Thinking about becoming a barber? Ask me about our courses, tuition, or next start dates.` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const replyText = await generateAiResponse(messages, inputValue, businessConfig);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: replyText }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col border border-stone-200 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 font-sans"
          role="dialog"
          aria-label="Admissions Assistant Chat"
        >
          {/* Header */}
          <div className="bg-stone-900 p-4 flex justify-between items-center text-white border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="bg-brand-600 p-1.5 rounded-full" aria-hidden="true">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">Admissions Assistant</h3>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                  Live Support
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-100" role="log" aria-live="polite">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-stone-200 rounded-lg rounded-bl-none px-4 py-3 flex gap-1 items-center" aria-label="Assistant is typing">
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-stone-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about classes..."
                aria-label="Type your message"
                className="w-full pl-4 pr-12 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm placeholder:text-stone-400"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
                className="absolute right-2 p-2 bg-stone-900 text-white rounded-md hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="group flex items-center gap-3 focus:outline-none"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        <span className={`bg-stone-900 text-white px-4 py-2 rounded-md shadow-lg text-sm font-bold tracking-wide transition-all origin-right duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`} aria-hidden="true">
          Admissions Help
        </span>
        <div className="bg-brand-600 text-white p-4 rounded-full shadow-xl hover:bg-brand-700 transition-all transform hover:scale-110 border-2 border-white focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2">
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <MessageSquare className="h-6 w-6" aria-hidden="true" />}
        </div>
      </button>
    </div>
  );
};

export default AiReceptionist;