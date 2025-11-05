import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '../ui/button';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 z-50">
          <div className="bg-[#0A2342] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3>Chat with Expert</h3>
              <p className="text-xs text-gray-300">We're here to help!</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg mb-3">
              <p className="text-sm">Hello! 👋 How can I help you today?</p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                💰 Get best price for my car
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                🚗 Find cars in my budget
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                📋 Loan assistance
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                📞 Schedule a callback
              </button>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-900 dark:border-slate-600"
              />
              <Button size="sm" className="bg-[#0A2342] hover:bg-[#0A2342]/90">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A2342] z-50"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </>
  );
}
