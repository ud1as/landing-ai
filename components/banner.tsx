'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  return (
    <div className="fixed bottom-0 right-0 m-4 z-50">
      {!chatOpen && (
       <button
       className="bg-purple-600  text-white p-4 rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-105"
       onClick={() => window.location.href = 'https://flow-ai-ui.vercel.app/chat'}
     >
       Try demo
     </button>
      )}
      {chatOpen && (
        <div className="bg-slate-800 text-slate-50 text-sm p-3 rounded shadow-lg w-72 flex flex-col items-center">
          <div className="flex justify-between items-center w-full">
            <button
              className="text-slate-400 hover:text-slate-200"
              onClick={() => setChatOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}