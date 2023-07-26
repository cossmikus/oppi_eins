

// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// interface CheckboxState {
//   [key: string]: boolean;
// }

// interface User {
//   email: string;
// }

// const HomePage: React.FC = () => {
//   const [checkboxes, setCheckboxes] = useState<CheckboxState>({
//     budgeting: false,
//     saving: false,
//     investments: false,
//   });

//   useEffect(() => {
//     const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes') || '{}');
//     setCheckboxes(savedCheckboxes);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
//   }, [checkboxes]);

//   const handleCheckboxChange = (checkbox: string) => {
//     setCheckboxes((prevState) => ({
//       ...prevState,
//       [checkbox]: !prevState[checkbox],
//     }));
//   };

//   const [user, setUser] = useState<User | null>(null);

//   const router = useRouter();
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>


//         {/* Other components or content */}
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           {/* Licensing information */}
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           {/* Contact information */}
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;








// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// interface CheckboxState {
//   [key: string]: boolean;
// }

// interface User {
//   email: string;
// }

// interface Movie {
//   id: number;
//   title: string;
//   genre: string;
//   imageUrl: string;
// }

// const HomePage: React.FC = () => {
//   const [checkboxes, setCheckboxes] = useState<CheckboxState>({
//     action: false,
//     drama: false,
//     comedy: false,
//   });

//   useEffect(() => {
//     const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes') || '{}');
//     setCheckboxes(savedCheckboxes);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
//   }, [checkboxes]);

//   const handleCheckboxChange = (checkbox: string) => {
//     setCheckboxes((prevState) => ({
//       ...prevState,
//       [checkbox]: !prevState[checkbox],
//     }));
//   };

//   const [user, setUser] = useState<User | null>(null);

//   const router = useRouter();
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const movies: Movie[] = [
//     {
//       id: 1,
//       title: 'Movie 1',
//       genre: 'action',
//       imageUrl: '/images/movie1.jpg',
//     },
//     {
//       id: 2,
//       title: 'Movie 2',
//       genre: 'drama',
//       imageUrl: '/images/movie2.jpg',
//     },
//     {
//       id: 3,
//       title: 'Movie 3',
//       genre: 'comedy',
//       imageUrl: '/images/movie3.jpg',
//     },
//     // Add more movies with different genres and images here
//   ];

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         {/* Genre checkboxes */}
//         <div className="flex items-center mb-4">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={checkboxes.action}
//             onChange={() => handleCheckboxChange('action')}
//           />
//           <label>Action</label>
//         </div>
//         <div className="flex items-center mb-4">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={checkboxes.drama}
//             onChange={() => handleCheckboxChange('drama')}
//           />
//           <label>Drama</label>
//         </div>
//         <div className="flex items-center mb-4">
//           <input
//             type="checkbox"
//             className="mr-2"
//             checked={checkboxes.comedy}
//             onChange={() => handleCheckboxChange('comedy')}
//           />
//           <label>Comedy</label>
//         </div>

//         {/* Movies by genre */}
//         <div className="grid grid-cols-3 gap-4">
//           {movies.map(movie => {
//             if (checkboxes[movie.genre]) {
//               return (
//                 <div key={movie.id} className="bg-gray-100 p-4">
//                   <img src={movie.imageUrl} alt={movie.title} className="w-full h-40 object-cover mb-2" />
//                   <h3 className="text-lg font-bold">{movie.title}</h3>
//                   <p>{movie.genre}</p>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           {/* Licensing information */}
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           {/* Contact information */}
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// interface User {
//   email: string;
// }

// interface Movie {
//   id: number;
//   title: string;
//   genre: string;
//   imageUrl: string;
// }

// const HomePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   const router = useRouter();
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   // Fetch movies by search query
//   const fetchMoviesBySearch = async (query: string) => {
//     try {
//       const response = await axios.get(
//         `https://rapidapi.com/SAdrian/api/moviesdatabase/search?s=${encodeURIComponent(
//           query
//         )}`
//       );
//       setMovies(response.data);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setMovies([]); // Reset movies to an empty array if there's an error
//     }
//   };

//   // Handle the search input change
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetchMoviesBySearch(searchQuery);
//   };

//   // Fetch all movies on component mount
//   useEffect(() => {
//     fetchMoviesBySearch(''); // Fetch all movies initially
//   }, []);

//   return (
//     <div>
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-3 gap-4">
//           {movies.map((movie) => (
//             <div key={movie.id} className="bg-gray-100 p-4">
//               <img src={movie.imageUrl} alt={movie.title} className="w-full h-40 object-cover mb-2" />
//               <h3 className="text-lg font-bold">{movie.title}</h3>
//               <p>{movie.genre}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;




// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// interface User {
//   email: string;
// }

// interface Movie {
//   id: number;
//   title: string;
//   genre: string;
//   imageUrl: string;
// }

// const HomePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter();
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   // Fetch movies by title from the RapidAPI
//   const fetchMoviesByTitle = async (title: string) => {
//     try {
//       const response = await axios.get(
//         `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${encodeURIComponent(title)}`,
//         {
//           headers: {
//             'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
//             'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//           },
//         }
//       );
//       setMovies(response.data);
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setMovies([]); // Reset movies to an empty array if there's an error
//     }
//   };

//   // Handle the search input change
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetchMoviesByTitle(searchQuery);
//   };

//   // Fetch all movies on component mount
//   useEffect(() => {
//     fetchMoviesByTitle(''); // Fetch all movies initially
//   }, []);

//   return (
//     <div>
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-3 gap-4">
//           {movies.map((movie) => (
//             <div key={movie.id} className="bg-gray-100 p-4">
//               <img src={movie.imageUrl} alt={movie.title} className="w-full h-40 object-cover mb-2" />
//               <h3 className="text-lg font-bold">{movie.title}</h3>
//               <p>{movie.genre}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router'; // Import useRouter from next/router

// interface User {
//   email: string;
// }

// interface Movie {
//   id: number;
//   title: string;
//   genre: string;
//   imageUrl: string;
// }

// const HomePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter(); // Use useRouter here
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   // Fetch movies by title from the RapidAPI
//   const fetchMoviesByTitle = async (title: string) => {
//     try {
//       const response = await axios.get(
//         `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${encodeURIComponent(title)}`,
//         {
//           headers: {
//             'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
//             'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//           },
//         }
//       );
//       if (Array.isArray(response.data.results)) {
//         setMovies(response.data.results);
//       } else {
//         console.error('Unexpected response format from API');
//         setMovies([]);
//       }
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setMovies([]); // Reset movies to an empty array if there's an error
//     }
//   };

//   // Handle the search input change
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetchMoviesByTitle(searchQuery);
//   };

//   return (
//     <div>
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-3 gap-4">
//           {movies.map((movie) => (
//             <div key={movie.id} className="bg-gray-100 p-4">
//               <img src={movie.imageUrl} alt={movie.title} className="w-full h-40 object-cover mb-2" />
//               <h3 className="text-lg font-bold">{movie.title}</h3>
//               <p>{movie.genre}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;




// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router'; // Import useRouter from next/router

// interface User {
//   email: string;
// }

// interface Movie {
//   originalTitle: string;
//   releaseYear: number;
//   id: string;
// }

// const HomePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter(); // Use useRouter here
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   // Fetch movies by title from the RapidAPI
//   const fetchMoviesByTitle = async (title: string) => {
//     try {
//       const response = await axios.get(
//         `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${encodeURIComponent(title)}`,
//         {
//           headers: {
//             'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
//             'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//           },
//         }
//       );

//       if (Array.isArray(response.data.results)) {
//         console.log(response.data)
//         const moviesWithInfo = response.data.results.map((movie: any) => ({
//           originalTitle: movie.originalTitleText.text,
//           releaseYear: movie.releaseYear.year,
//           id: movie._id,
//         }));
//         setMovies(moviesWithInfo);
//       } else {
//         console.error('Unexpected response format from API');
//         setMovies([]);
//       }
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setMovies([]); // Reset movies to an empty array if there's an error
//     }
//   };

//   // Handle the search input change
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetchMoviesByTitle(searchQuery);
//   };

//   return (
//     <div>
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-3 gap-4">
//           {movies.map((movie) => (
//             <div key={movie.id} className="bg-gray-100 p-4">
//               <h3 className="text-lg font-bold">{movie.originalTitle}</h3>
//               <p>Release Year: {movie.releaseYear}</p>
//               <p>ID: {movie.id}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router'; // Import useRouter from next/router

// interface User {
//   email: string;
// }

// interface Movie {
//   originalTitle: string;
//   releaseYear: number;
//   id: string;
//   imageUrl: string;
// }

// const HomePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter(); // Use useRouter here
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   // Fetch movies by title from the RapidAPI
//   const fetchMoviesByTitle = async (title: string) => {
//     try {
//       const response = await axios.get(
//         `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${encodeURIComponent(title)}`,
//         {
//           headers: {
//             'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
//             'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//           },
//         }
//       );

//       if (Array.isArray(response.data.results)) {
//         const moviesWithInfo = response.data.results.map((movie: any) => ({
//           originalTitle: movie.originalTitleText.text,
//           releaseYear: movie.releaseYear.year,
//           id: movie._id,
//           imageUrl: movie.primaryImage.url,
//         }));
//         setMovies(moviesWithInfo);
//       } else {
//         console.error('Unexpected response format from API');
//         setMovies([]);
//       }
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setMovies([]); // Reset movies to an empty array if there's an error
//     }
//   };

//   // Handle the search input change
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetchMoviesByTitle(searchQuery);
//   };

//   return (
//     <div>
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-3 gap-4">
//           {movies.map((movie) => (
//             <div key={movie.id} className="bg-gray-100 p-4">
//               <img src={movie.imageUrl} alt={movie.originalTitle} className="w-full h-40 object-cover mb-2" />
//               <div className="overflow-hidden h-32">
//                 <h3 className="text-lg font-bold">{movie.originalTitle}</h3>
//                 <p>Release Year: {movie.releaseYear}</p>
//                 <p>ID: {movie.id}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router'; // Import useRouter from next/router

// interface User {
//   email: string;
// }

// interface Movie {
//   originalTitle: string;
//   releaseYear: number;
//   id: string;
//   imageUrl: string;
// }

// const HomePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter(); // Use useRouter here
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [maxPages, setMaxPages] = useState<number>(0);

//   // Fetch movies by title from the RapidAPI
//   const fetchMoviesByTitle = async (title: string, page: number) => {
//     try {
//       const response = await axios.get(
//         `https://moviesdatabase.p.rapidapi.com/titles/search/akas/${encodeURIComponent(title)}`,
//         {
//           params: {
//             page: page.toString(),
//           },
//           headers: {
//             'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
//             'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//           },
//         }
//       );

//       if (Array.isArray(response.data.results)) {
//         const moviesWithInfo = response.data.results.map((movie: any) => ({
//           originalTitle: movie.originalTitleText.text,
//           releaseYear: movie.releaseYear.year,
//           id: movie._id,
//           imageUrl: movie.primaryImage.url,
//         }));
//         setMovies(moviesWithInfo);
//         setTotalPages(response.data.totalPages);
//         setMaxPages(response.data.totalPages); // Update maxPages for the current title
//       } else {
//         console.error('Unexpected response format from API');
//         setMovies([]);
//         setTotalPages(0);
//         setMaxPages(0);
//       }
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setMovies([]); // Reset movies to an empty array if there's an error
//       setTotalPages(0);
//       setMaxPages(0);
//     }
//   };

//   // Handle the search input change
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setCurrentPage(1); // Reset to the first page when a new search is made
//     fetchMoviesByTitle(searchQuery, 1);
//   };

//   // Handle pagination clicks
//   const handlePaginationClick = (page: number) => {
//     setCurrentPage(page);
//   };

//   // Fetch movies when the search query or currentPage changes
//   useEffect(() => {
//     if (searchQuery) {
//       fetchMoviesByTitle(searchQuery, currentPage);
//     }
//   }, [searchQuery, currentPage]);

//   return (
//     <div>
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-3 gap-4">
//           {movies.map((movie) => (
//             <div key={movie.id} className="bg-gray-100 p-4">
//               <img src={movie.imageUrl} alt={movie.originalTitle} className="w-full h-40 object-cover mb-2" />
//               <div className="overflow-hidden h-32">
//                 <h3 className="text-lg font-bold">{movie.originalTitle}</h3>
//                 <p>Release Year: {movie.releaseYear}</p>
//                 <p>ID: {movie.id}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {maxPages > 1 && (
//           <div className="flex justify-center mt-4">
//             {Array.from({ length: maxPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 className={`mx-1 px-3 py-1 rounded ${
//                   page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
//                 }`}
//                 onClick={() => handlePaginationClick(page)}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router'; // Import useRouter from next/router

// interface User {
//   email: string;
// }

// interface Movie {
//   title: string;
//   imageUrl: string;
// }

// const HomePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter(); // Use useRouter here
//   const { email } = router.query;

//   useEffect(() => {
//     if (email) {
//       setUser({ email: email as string });
//     }
//   }, [email]);

//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   // Fetch movies by title from the RapidAPI
//   const fetchMoviesByTitle = async (title: string) => {
//     try {
//       const response = await axios.get('https://online-movie-database.p.rapidapi.com/title/v2/find', {
//         params: {
//           title: title,
//           limit: '20',
//           sortArg: 'moviemeter,asc',
//         },
//         headers: {
//           'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
//           'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
//         },
//       });

//       if (Array.isArray(response.data.results)) {
//         const moviesWithInfo = response.data.results.map((movie: any) => ({
//           title: movie.title,
//           imageUrl: movie.image && movie.image.url, // Check if 'image' is available in the response
//         }));
//         setMovies(moviesWithInfo);
//       } else {
//         console.error('Unexpected response format from API');
//         setMovies([]);
//       }
//     } catch (error) {
//       console.error('Error searching movies:', error);
//       setMovies([]); // Reset movies to an empty array if there's an error
//     }
//   };

//   // Handle the search input change
//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetchMoviesByTitle(searchQuery);
//   };

//   return (
//     <div>
//       <div className="flex justify-between bg-gray-200 p-4">
//         <div>
//           <Link href="/content">
//             <button>Chatbot</button>
//           </Link>
//         </div>
//         <div>
//           {user && <p>{user.email}</p>}
//         </div>
//       </div>

//       <div className="mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={handleSearchInputChange}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-3 gap-4">
//           {movies.map((movie, index) => (
//             <div key={index} className="bg-gray-100 p-4">
//               {movie.imageUrl && (
//                 <img src={movie.imageUrl} alt={movie.title} className="w-full h-40 object-cover mb-2" />
//               )}
//               <div className="overflow-hidden h-32">
//                 <h3 className="text-lg font-bold">{movie.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-gray-200 p-4 mt-8">
//         <div>
//           <p>Licensed under XYZ license.</p>
//         </div>
//         <div>
//           <p>Contact us at: contact@example.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import Header from './components/Header';
interface User {
  email: string;
}

interface Movie {
  title: string;
  imageUrl: string;
  year: number;
}

const HomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter(); // Use useRouter here
  const { email } = router.query;

  useEffect(() => {
    if (email) {
      setUser({ email: email as string });
    }
  }, [email]);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);

  // Fetch movies by title from the RapidAPI
  const fetchMoviesByTitle = async (title: string, page: number) => {
    try {
      const response = await axios.get('https://online-movie-database.p.rapidapi.com/title/v2/find', {
        params: {
          title: title,
          limit: '9',
          paginationKey: page.toString(),
          sortArg: 'moviemeter,asc',
        },
        headers: {
          'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
        },
      });

      if (Array.isArray(response.data.results)) {
        const moviesWithInfo = response.data.results.map((movie: any) => ({
          title: movie.title,
          imageUrl: movie.image && movie.image.url, // Check if 'image' is available in the response
          year: movie.year,
        }));
        setMovies(moviesWithInfo);
        setMaxPages(parseInt(response.data.paginationKey, 10)); // Set maxPages based on the paginationKey from the response
      } else {
        console.error('Unexpected response format from API');
        setMovies([]);
        setMaxPages(0);
      }
    } catch (error) {
      console.error('Error searching movies:', error);
      setMovies([]); // Reset movies to an empty array if there's an error
      setMaxPages(0);
    }
  };

  // Handle the search input change
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1); // Reset to the first page when a new search is made
    fetchMoviesByTitle(searchQuery, 1);
  };

  // Handle pagination clicks
  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
    fetchMoviesByTitle(searchQuery, page);
  };

  // Fetch movies when the search query or currentPage changes
  useEffect(() => {
    if (searchQuery) {
      fetchMoviesByTitle(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage]);

  return (
    <div>
      {/* <div className="flex justify-between bg-gray-200 p-4">
        <div>
          <Link href="/content">
            <button>Chatbot</button>
          </Link>
        </div>
        <div>
          {user && <p>{user.email}</p>}
        </div>
      </div> */}
      <Header/>

      <div className="mx-auto p-4 max-w-md">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>

        <form onSubmit={handleSearchSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Search movies by name..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="p-2 border border-gray-300 rounded mr-2"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>

        <div className="grid grid-cols-3 gap-4">
          {movies.map((movie, index) => (
            <div key={index} className="bg-gray-100 p-4">
              {movie.imageUrl && (
                <img src={movie.imageUrl} alt={movie.title} className="w-full h-40 object-cover mb-2" />
              )}
              <div className="overflow-hidden h-32">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p>Year: {movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {maxPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: maxPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`mx-1 px-3 py-1 rounded ${
                page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
              onClick={() => handlePaginationClick(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      <footer className="bg-gray-200 p-4 mt-8">
        <div>
          <p>Licensed under XYZ license.</p>
        </div>
        <div>
          <p>Contact us at: contact@example.com</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
