// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] });

// export default function Content() {
//   const [conversation, setConversation] = useState<string[]>([]);
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const savedConversation = JSON.parse(localStorage.getItem('conversation') || '[]');
//     setConversation(savedConversation);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('conversation', JSON.stringify(conversation));
//   }, [conversation]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!message.trim()) return;

//     setIsLoading(true);
//     try {
//       const response = await axios.post('https://devilprada.onrender.com/api/home', { word: message });
//       const answer = response.data.message;
//       const updatedConversation = [...conversation, message, answer];
//       setConversation(updatedConversation);
//       setMessage('');

//       localStorage.setItem('conversation', JSON.stringify(updatedConversation)); // Update local storage
//     } catch (error) {
//       console.error(error);
//     }
//     setIsLoading(false);
//   };

//   const clearConversation = () => {
//     setConversation([]);
//     localStorage.removeItem('conversation');
//   };

//   return (
//     <header>
//       <div>
//         <Link href="/">Home Page</Link> {/* Example usage of Link in Content */}
//       </div>
//       <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
//         <div>
//           {conversation.map((text, index) => (
//             <div key={index}>
//               {index % 2 === 0 ? (
//                 <strong>{text}</strong> // Render asked question in bold
//               ) : (
//                 text
//               )}
//               {index % 2 === 0 && index !== conversation.length - 1 && <hr className="my-2" />} {/* Add dashed line after question */}
//               {index % 2 === 1 && <hr className="my-2" />} {/* Add bold line after answer */}
//             </div>
//           ))}
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={message}
//             onChange={(event) => setMessage(event.target.value)}
//           />
//           <button type="submit" disabled={isLoading}>
//             Submit
//           </button>
//         </form>
//         {isLoading && <div>Loading...</div>}
//       </main>
//       <footer>
//         <button onClick={clearConversation}>Clear Conversations</button>
//       </footer>
//     </header>
//   );
// }


import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../components/Header'

export default function Content() {
  const [conversation, setConversation] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedConversation = JSON.parse(localStorage.getItem('conversation') || '[]');
    setConversation(savedConversation);
  }, []);

  useEffect(() => {
    localStorage.setItem('conversation', JSON.stringify(conversation));
  }, [conversation]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.post('https://devilprada.onrender.com/api/home', { word: message });
      const answer = response.data.message;
      const updatedConversation = [...conversation, message, answer];
      setConversation(updatedConversation);
      setMessage('');

      localStorage.setItem('conversation', JSON.stringify(updatedConversation)); // Update local storage
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const clearConversation = () => {
    setConversation([]);
    localStorage.removeItem('conversation');
  };

  return (
    <div>
      <Header/>

      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        

        <main className="flex flex-col items-center justify-between p-8 bg-white rounded-lg shadow-md w-3/4">
          <div className="w-full">
            {conversation.map((text, index) => (
              <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
                {text}
                {index % 2 === 0 && index !== conversation.length - 1 && (
                  <hr className="my-2 border-dashed border-gray-300" />
                )}
                {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="w-full mt-4">
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </form>
          {isLoading && <div className="mt-4">Loading...</div>}
        </main>
        <footer className="mt-4">
          <button
            onClick={clearConversation}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
          >
            Clear Conversations
          </button>
        </footer>
      </div>
        
    </div>
  )}
