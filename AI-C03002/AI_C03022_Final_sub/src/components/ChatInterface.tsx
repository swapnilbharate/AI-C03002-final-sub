import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, Activity } from 'lucide-react';
import ChatResponse from './ChatResponse';
import { HealthResponse } from '../types';
import { mockResponses } from '../data/mockData';

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState<HealthResponse[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [responses]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mockResponses.length);
      const newResponse = {
        id: Date.now().toString(),
        query: input,
        ...mockResponses[randomIndex]
      };
      
      setResponses(prev => [...prev, newResponse]);
      setInput('');
      setIsLoading(false);
      
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }, 1500);
  };

  const clearChat = () => {
    setResponses([]);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Healthcare Assistant
        </h2>
        {responses.length > 0 && (
          <button 
            onClick={clearChat}
            className="px-4 py-2 text-sm bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-600 rounded-full flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Clear chat</span>
          </button>
        )}
      </div>
      
      <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-lg p-6 mb-6 flex-grow overflow-y-auto max-h-[calc(100vh-300px)] border border-blue-100">
        {responses.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="mb-8 bg-gradient-to-r from-blue-500 to-teal-400 p-5 rounded-full shadow-lg">
              <Activity className="w-14 h-14 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              How can I help you today?
            </h3>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed">
              Describe your symptoms or health concerns, and I'll provide detailed information about possible conditions, 
              symptoms, remedies, and precautions.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {responses.map((response) => (
              <div key={response.id}>
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 rounded-2xl inline-block max-w-[85%] shadow-sm">
                    <p className="text-gray-800">{response.query}</p>
                  </div>
                </div>
                <ChatResponse response={response} />
              </div>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="relative bg-white rounded-2xl shadow-lg border border-blue-100">
        <textarea
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Describe your symptoms or health concerns..."
          className="w-full p-6 pr-20 resize-none max-h-40 min-h-[64px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 placeholder-gray-400"
          disabled={isLoading}
          rows={1}
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || isLoading}
          className={`absolute right-4 bottom-4 p-3 rounded-xl ${
            !input.trim() || isLoading
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 shadow-md hover:shadow-lg transition-all duration-300'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      
      {isLoading && (
        <div className="mt-4 text-sm text-gray-600 flex items-center justify-center bg-blue-50 py-3 px-6 rounded-full shadow-sm">
          <div className="loading-dots flex space-x-1.5 items-center mr-3">
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 w-2.5 h-2.5 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 w-2.5 h-2.5 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 w-2.5 h-2.5 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
          <span>Analyzing your concerns...</span>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;