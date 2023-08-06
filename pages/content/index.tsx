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


// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import Header from '../components/Header'

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
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     <div>
//       <Header/>

//       <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        

//         <main className="flex flex-col items-center justify-between p-8 bg-white rounded-lg shadow-md w-3/4">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
//                 {text}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//           <form onSubmit={handleSubmit} className="w-full mt-4">
//             <input
//               type="text"
//               value={message}
//               onChange={(event) => setMessage(event.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//               placeholder="Type your message..."
//             />
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
//             >
//               Send
//             </button>
//           </form>
//           {isLoading && <div className="mt-4">Loading...</div>}
//         </main>
//         <footer className="mt-4">
//           <button
//             onClick={clearConversation}
//             className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
//           >
//             Clear Conversations
//           </button>
//         </footer>
//       </div>
        
//     </div>
//   )}


// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import Header from '../components/Header';

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
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//         <main className="flex flex-col items-center justify-between p-8 bg-white rounded-lg shadow-md w-3/4">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//           <form onSubmit={handleSubmit} className="w-full mt-4">
//             <input
//               type="text"
//               value={message}
//               onChange={(event) => setMessage(event.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//               placeholder="Type your message..."
//             />
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full mt-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
//             >
//               Send
//             </button>
//           </form>
//           {isLoading && <div className="mt-4">Loading...</div>}
//         </main>
//         <footer className="mt-4">
//           <button
//             onClick={clearConversation}
//             className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
//           >
//             Clear Conversations
//           </button>
//         </footer>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import Header from '../components/Header';

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
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//         <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-3/4 max-h-[calc(100vh-120px)] overflow-y-auto">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//         </main>
//         <form onSubmit={handleSubmit} className="w-full mt-4">
//           <div className="relative">
//             <input
//               type="text"
//               value={message}
//               onChange={(event) => setMessage(event.target.value)}
//               className="w-full p-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//               placeholder="Type your message..."
//             />
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="absolute right-2 top-2 transform rotate-45 bg-gray-500 hover:bg-gray-600 text-white w-6 h-6 border-none cursor-pointer"
//             >
//               {/* Render the triangle pointer using CSS */}
//               <div className="w-0 h-0 border-t-3 border-transparent border-b-3 border-transparent border-l-3 border-white"></div>
//             </button>
//           </div>
//         </form>
//         {isLoading && <div className="mt-4">Loading...</div>}
//         <footer className="mt-4">
//           <button
//             onClick={clearConversation}
//             className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
//           >
//             Clear Conversations
//           </button>
//         </footer>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import Header from '../components/Header';

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
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//         <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-3/4 max-h-[calc(100vh-120px)] overflow-y-auto">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//         </main>
//         <footer className="mt-4">
//           <form onSubmit={handleSubmit} className="relative">
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={clearConversation}
//                 className="absolute left-2 top-2 text-gray-500 hover:text-gray-600 w-6 h-6 border-none cursor-pointer"
//               >
//                 {/* Render the trash.png image as the clear conversations button */}
//                 <img src="/trash.png" alt="Clear Conversations" className="w-full h-full" />
//               </button>
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 className="w-full p-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//                 placeholder="Type your message..."
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="absolute right-2 top-2 transform rotate-45 bg-gray-500 hover:bg-gray-600 text-white w-6 h-6 border-none cursor-pointer"
//               >
//                 {/* Render the triangle pointer using the abd.png image */}
//                 <img src="/abd.png" alt="Send" className="w-full h-full" />
//               </button>
              
//             </div>
//           </form>
//         </footer>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from '../components/Header';

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
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
//         <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-4xl h-full overflow-y-auto">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>

//       <footer className="mt-4 w-full max-w-4xl mx-auto">
//         <form onSubmit={handleSubmit} className="relative">
//           <div className="relative">
//             <button
//               type="button"
//               onClick={clearConversation}
//               className="absolute left-2 top-2 text-gray-500 hover:text-gray-600 w-6 h-6 border-none cursor-pointer"
//             >
//               {/* Render the trash.png image as the clear conversations button */}
//               <img src="/trash.png" alt="Clear Conversations" className="w-full h-full" />
//             </button>
//             <input
//               type="text"
//               value={message}
//               onChange={(event) => setMessage(event.target.value)}
//               className="w-full p-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//               placeholder="Type your message..."
//             />
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="absolute right-2 top-2 transform rotate-45 bg-gray-500 hover:bg-gray-600 text-white w-6 h-6 border-none cursor-pointer"
//             >
//               {/* Render the triangle pointer using the abd.png image */}
//               <img src="/abd.png" alt="Send" className="w-full h-full" />
//             </button>
//           </div>
//         </form>
//       </footer>
//     </div>
//   );
// }


// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from '../components/Header';

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
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
//         <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-4xl h-full overflow-y-auto">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//         </main>

//         <footer className="mt-4 w-full max-w-4xl mx-auto">
//           <div className="relative w-full">
//             <button
//               type="button"
//               onClick={clearConversation}
//               className="absolute left-2 top-2 text-gray-500 hover:text-gray-600 w-6 h-6 border-none cursor-pointer"
//             >
//               {/* Render the trash.png image as the clear conversations button */}
//               <img src="/trash.png" alt="Clear Conversations" className="w-full h-full" />
//             </button>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//                 placeholder="Type your message..."
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="absolute right-2 top-2 transform rotate-45 bg-gray-500 hover:bg-gray-600 text-white w-6 h-6 border-none cursor-pointer"
//               >
//                 {/* Render the triangle pointer using the abd.png image */}
//                 <img src="/abd.png" alt="Send" className="w-full h-full" />
//               </button>
//             </form>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import Header from '../components/Header';

// export default function Content() {
//   const [conversation, setConversation] = useState<string[]>([
//     // Initial greeting message
//     "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
//   ]);
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const savedConversation = JSON.parse(localStorage.getItem('conversation') || '[]');
//     if (savedConversation.length > 0) {
//       setConversation(savedConversation);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('conversation', JSON.stringify(conversation));
//   }, [conversation]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!message.trim()) return;

//     setIsLoading(true);
//     try {
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     setConversation([
//       // Reset conversation with the greeting message
//       "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
//     ]);
//     localStorage.removeItem('conversation');
//   };

//   return (
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
//         <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-4xl h-full overflow-y-auto">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div key={index} className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`}>
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//         </main>

//         <footer className="mt-4 w-full max-w-4xl mx-auto">
//           <div className="relative w-full">
//             <button
//               type="button"
//               onClick={clearConversation}
//               className="absolute left-2 top-2 text-gray-500 hover:text-gray-600 w-6 h-6 border-none cursor-pointer"
//             >
//               {/* Render the trash.png image as the clear conversations button */}
//               <img src="/trash.png" alt="Clear Conversations" className="w-full h-full" />
//             </button>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//                 placeholder="Type your message..."
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="absolute right-2 top-2 transform rotate-45 bg-gray-500 hover:bg-gray-600 text-white w-6 h-6 border-none cursor-pointer"
//               >
//                 {/* Render the triangle pointer using the abd.png image */}
//                 <img src="/abd.png" alt="Send" className="w-full h-full" />
//               </button>
//             </form>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import Header from '../components/Header';

// export default function Content() {
//   const [conversation, setConversation] = useState<string[]>([
//     // Initial greeting message
//     "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
//   ]);
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const savedConversation = JSON.parse(localStorage.getItem('conversation') || '[]');
//     if (savedConversation.length > 0) {
//       setConversation(savedConversation);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('conversation', JSON.stringify(conversation));
//   }, [conversation]);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!message.trim()) return;

//     setIsLoading(true);
//     try {
//       const response = await axios.post('http://127.0.0.1:8080/api/home', { word: message });
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
//     setConversation([
//       // Reset conversation with the greeting message
//       "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
//     ]);
//     localStorage.removeItem('conversation');
//   };

//   return (
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
//         <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-4xl h-full overflow-y-auto">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div
//                 key={index}
//                 className={`p-2 ${index % 2 === 0 ? 'font-bold' : ''}`} // Add font-bold class to questions
//               >
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index % 2 === 0 && index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//                 {index % 2 === 1 && <hr className="my-2 border-gray-300" />}
//               </div>
//             ))}
//           </div>
//         </main>

//         <footer className="mt-4 w-full max-w-4xl mx-auto">
//           <div className="relative w-full">
//             <button
//               type="button"
//               onClick={clearConversation}
//               className="absolute left-2 top-2 text-gray-500 hover:text-gray-600 w-6 h-6 border-none cursor-pointer"
//             >
//               {/* Render the trash.png image as the clear conversations button */}
//               <img src="/trash.png" alt="Clear Conversations" className="w-full h-full" />
//             </button>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
//                 placeholder="Type your message..."
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="absolute right-2 top-2 transform rotate-45 bg-gray-500 hover:bg-gray-600 text-white w-6 h-6 border-none cursor-pointer"
//               >
//                 {/* Render the triangle pointer using the abd.png image */}
//                 <img src="/abd.png" alt="Send" className="w-full h-full" />
//               </button>
//             </form>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function Content() {
  const [conversation, setConversation] = useState<string[]>([
    // Initial greeting message
    "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
  ]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const savedConversation = JSON.parse(localStorage.getItem('conversation') || '[]');
    if (savedConversation.length > 0) {
      setConversation(savedConversation);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('conversation', JSON.stringify(conversation));
  }, [conversation]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isLoading) {
      let count = 1;
      intervalId = setInterval(() => {
        setLoadingDots('.'.repeat(count));
        count = (count + 1) % 4;
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading]);

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
    setConversation([
      // Reset conversation with the greeting message
      "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
    ]);
    localStorage.removeItem('conversation');
  };

  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
        <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-4xl h-full overflow-y-auto">
          <div className="w-full">
            {conversation.map((text, index) => (
              <div
                key={index}
                className={`p-2 text-black`} // Change text color to black
              >
                {text.split('\n').map((sentence, sentenceIndex) => (
                  <React.Fragment key={sentenceIndex}>
                    {sentence}
                    <br /> {/* Add line break after each sentence */}
                  </React.Fragment>
                ))}
                {index !== conversation.length - 1 && (
                  <hr className="my-2 border-dashed border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </main>

        <footer className="mt-4 w-full max-w-4xl mx-auto">
          <div className="relative w-full">
            <button
              type="button"
              onClick={clearConversation}
              className="absolute left-2 top-2 text-gray-500 hover:text-gray-600 w-6 h-6 border-none cursor-pointer"
            >
              {/* Render the trash.png image as the clear conversations button */}
              <img src="/trash.png" alt="Clear Conversations" className="w-full h-full" />
            </button>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full p-2 pl-10 pr-12 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 transform rotate-45 bg-blue-500 hover:bg-blue-600 text-white w-6 h-6 border-none cursor-pointer"
              >
                {/* Render the triangle pointer using the abd.png image */}
                <img src="/abd.png" alt="Send" className="w-full h-full" />
              </button>
            </form>
          </div>
          {isLoading && (
            <div className="mt-2 text-blue-500">
              {/* Render the loading dots */}
              Loading{loadingDots}
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}


// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import Header from '../components/Header';

// export default function Content() {
//   const [conversation, setConversation] = useState<string[]>([
//     // Initial greeting message
//     "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
//   ]);
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [loadingDots, setLoadingDots] = useState('');

//   useEffect(() => {
//     const savedConversation = JSON.parse(localStorage.getItem('conversation') || '[]');
//     if (savedConversation.length > 0) {
//       setConversation(savedConversation);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('conversation', JSON.stringify(conversation));
//   }, [conversation]);

//   useEffect(() => {
//     let intervalId: NodeJS.Timeout;

//     if (isLoading) {
//       let count = 1;
//       intervalId = setInterval(() => {
//         setLoadingDots('.'.repeat(count));
//         count = (count + 1) % 4;
//       }, 500);
//     }

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isLoading]);

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

//   const clearConversation = async () => {
//     setConversation([
//       // Reset conversation with the greeting message
//       "Hello! How can I assist you today? Are you looking for a new movie or TV show to watch? If so, could you please tell me what type of genre or specific element you're interested in?",
//     ]);
//     localStorage.removeItem('conversation');

//     try {
//       await axios.post('https://devilprada.onrender.com/api/clear');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Header />

//       <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
//         <main className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md w-full max-w-4xl h-full overflow-y-auto">
//           <div className="w-full">
//             {conversation.map((text, index) => (
//               <div
//                 key={index}
//                 className={`p-2 text-black`} // Change text color to black
//               >
//                 {text.split('\n').map((sentence, sentenceIndex) => (
//                   <React.Fragment key={sentenceIndex}>
//                     {sentence}
//                     <br /> {/* Add line break after each sentence */}
//                   </React.Fragment>
//                 ))}
//                 {index !== conversation.length - 1 && (
//                   <hr className="my-2 border-dashed border-gray-300" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </main>

//         <footer className="mt-4 w-full max-w-4xl mx-auto">
//           <div className="relative w-full">
//             <button
//               type="button"
//               onClick={clearConversation}
//               className="absolute left-2 top-2 text-gray-500 hover:text-gray-600 w-6 h-6 border-none cursor-pointer"
//             >
//               {/* Render the trash.png image as the clear conversations button */}
//               <img src="/trash.png" alt="Clear Conversations" className="w-full h-full" />
//             </button>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 className="w-full p-2 pl-10 pr-12 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-400"
//                 placeholder="Type your message..."
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="absolute right-2 top-2 transform rotate-45 bg-blue-500 hover:bg-blue-600 text-white w-6 h-6 border-none cursor-pointer"
//               >
//                 {/* Render the triangle pointer using the abd.png image */}
//                 <img src="/abd.png" alt="Send" className="w-full h-full" />
//               </button>
//             </form>
//           </div>
//           {isLoading && (
//             <div className="mt-2 text-blue-500">
//               {/* Render the loading dots */}
//               Loading{loadingDots}
//             </div>
//           )}
//         </footer>
//       </div>
//     </div>
//   );
// }
