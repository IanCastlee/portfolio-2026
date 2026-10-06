import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  Trash2, 
  RotateCcw
} from 'lucide-react';
import { sendGeminiMessage } from '../../services/geminiService';

const STORAGE_KEY = 'eyhan_portfolio_chat_history_v1';

const INITIAL_MESSAGES = [
  {
    role: 'model',
    content: "👋 Kamusta! Ako si **Eyhan AI**, ang portfolio assistant ni Ian Castillo powered by **Google Gemini**. Pwede mo akong tanungin tungkol sa kanyang production projects, backend architecture, skills, o availability para sa projects!"
  }
];

export const GeminiAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load chat history from localStorage', e);
    }
    return INITIAL_MESSAGES;
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-save messages to browser localStorage for caching
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      console.warn('Failed to save chat history to localStorage', e);
    }
  }, [messages]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSend = async (textToSend) => {
    const text = typeof textToSend === 'string' ? textToSend : input;
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Send chat history and new message to Gemini service
      const reply = await sendGeminiMessage(messages, text.trim());
      setMessages([...updatedMessages, { role: 'model', content: reply }]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        {
          role: 'model',
          content: "Paumanhin, nagkaroon ng pansamantalang isyu sa koneksyon kay Gemini. Pwede mong subukan ulit o direktang mag-email kay Ian sa [castillo321ian@gmail.com](mailto:castillo321ian@gmail.com)."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearConversation = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear localStorage', e);
    }
    setMessages(INITIAL_MESSAGES);
  };

  // Helper to format basic markdown (bold, links, bullet points)
  const renderFormattedText = (content) => {
    return (
      <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
        {content}
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5">
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-xl backdrop-blur-md hover:border-cyan-400 transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-wide">AI Chatbot</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle AI Chatbot"
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Sparkles className="w-6 h-6 animate-pulse" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Modal (Full-Screen on Mobile, Floating Card on Desktop) */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 w-full h-full sm:w-[440px] sm:h-[580px] sm:max-h-[calc(100vh-8rem)] rounded-none sm:rounded-2xl bg-slate-950/98 sm:bg-slate-950/95 border-0 sm:border sm:border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden animate-in fade-in duration-200">
          
          {/* Header */}
          <div className="px-4 py-3 sm:py-3.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white">Eyhan AI</h3>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-cyan-950 border border-cyan-800 text-cyan-300 font-semibold">Gemini</span>
                </div>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  AI Chatbot • Online
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Clear Conversation Button */}
              {messages.length > 1 && (
                <button
                  onClick={handleClearConversation}
                  title="Clear conversation history"
                  className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800/90 border border-slate-800 hover:border-red-900/40 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800/80 flex-shrink-0 flex items-center justify-center text-cyan-400 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-sm'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-sm'
                  }`}
                >
                  {renderFormattedText(msg.content)}
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-900 border border-blue-700 flex-shrink-0 flex items-center justify-center text-blue-200 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800/80 flex-shrink-0 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="rounded-2xl rounded-bl-sm px-4 py-2.5 bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5 text-xs font-mono">
                  <span>Gemini is thinking</span>
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-100">.</span>
                  <span className="animate-bounce delay-200">.</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 sm:p-3.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanungin si Eyhan AI tungkol sa projects o skills..."
              disabled={isLoading}
              className="flex-1 bg-slate-950 border border-slate-700/80 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Footer note */}
          <div className="px-3 py-1.5 bg-slate-950 text-center text-[10px] font-mono text-slate-500 border-t border-slate-900 flex items-center justify-between px-4">
            <span>✨ Saved in browser cache</span>
            <span>Powered by Google Gemini</span>
          </div>

        </div>
      )}
    </>
  );
};
