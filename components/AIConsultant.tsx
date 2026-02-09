import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Здравствуйте! Я ваш технический консультант. Чем я могу помочь вам в выборе оборудования или инструмента?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are a helpful and knowledgeable technical sales engineer for "MetalPro", a company selling CNC machines, tooling, and industrial consumables. 
          Your goal is to help customers select the right equipment, explain technical specifications (spindle speed, rigidity, materials), and suggest appropriate tooling. 
          Be professional, concise, and polite. 
          Answer in Russian.
          If asked about prices, say that prices depend on configuration and suggest contacting the sales department.
          Current Date: ${new Date().toLocaleDateString()}`,
        },
      });

      // Construct history for context (simplistic approach for this demo)
      // In a real app, you would pass the full history properly formatted for the SDK
      const historyPrompt = messages.map(m => `${m.role === 'user' ? 'User' : 'Model'}: ${m.text}`).join('\n') + `\nUser: ${userMessage.text}`;

      const responseStream = await chat.sendMessageStream({ message: userMessage.text });
      
      let fullResponse = '';
      const modelMessageIndex = messages.length + 1; // +1 because we haven't added it yet

      // Add a placeholder message for the stream
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || '';
        fullResponse += text;
        
        setMessages(prev => {
           const newMessages = [...prev];
           newMessages[newMessages.length - 1] = { role: 'model', text: fullResponse };
           return newMessages;
        });
      }

    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Извините, произошла ошибка. Пожалуйста, попробуйте позже.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-accent hover:bg-accent-hover text-white p-4 rounded-full shadow-lg transition-all z-50 flex items-center gap-2"
        >
          <Bot className="h-6 w-6" />
          <span className="font-medium hidden sm:inline">Онлайн консультант</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-[350px] sm:max-w-[400px] h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-accent" />
              <div>
                <h3 className="font-bold text-sm">AI Инженер</h3>
                <p className="text-xs text-gray-400">Powered by Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-accent text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
             {isLoading && messages.length % 2 === 0 && ( /* Only show spinner if we haven't started streaming yet or between thoughts */
                 <div className="flex justify-start">
                     <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2 rounded-bl-none shadow-sm">
                         <Loader2 className="h-4 w-4 animate-spin text-accent" />
                     </div>
                 </div>
             )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Спросите о станках или инструменте..."
              className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-accent text-white p-2 rounded-lg hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;