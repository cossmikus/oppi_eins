


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Header from './components/Header';
// import Footer from './components/Footer';

// interface User {
//   email: string;
// }

// interface Movie {
//   title: string;
//   imageUrl: string;
//   year: number;
// }

// interface Genre {
//   id: number;
//   name: string;
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
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [maxPages, setMaxPages] = useState<number>(0);
//   const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

//   // Fetch movies from the API using axios
//   const fetchMovies = async (genreId: number | null, page: number) => {
//     const apiKey = 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9';
//     const options = {
//       method: 'GET',
//       url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
//       params: {
//         with_genres: genreId ? genreId.toString() : '',
//         page: page.toString(),
//       },
//       headers: {
//         'X-RapidAPI-Key': apiKey,
//         'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       const data = response.data;
//       setMovies(
//         data.results.map((movie: any) => ({
//           title: movie.title,
//           imageUrl: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             : '',
//           year: parseInt(movie.release_date.substring(0, 4)),
//         }))
//       );
//       setMaxPages(data.total_pages);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//       setMaxPages(0);
//     }
//   };

//   // Handle the search form submission
//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setCurrentPage(1);
//     setSelectedGenre(null);
//     fetchMovies(null, 1);
//   };

//   // Handle genre button click
//   const handleGenreButtonClick = (genreId: number) => {
//     setCurrentPage(1);
//     setSearchQuery('');
//     setSelectedGenre(genreId);
//     fetchMovies(genreId, 1);
//   };

//   // Handle the "Previous" button click
//   const handlePreviousButtonClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   // Handle the "Next" button click
//   const handleNextButtonClick = () => {
//     if (currentPage < maxPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const movieGenres: Genre[] = [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' },
//   ];

//   useEffect(() => {
//     fetchMovies(selectedGenre, currentPage);
//   }, [selectedGenre, currentPage]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <div className="flex-grow mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-bold mb-8">Movie Recommendations</h1>

//         <form onSubmit={handleSearchSubmit} className="mb-4">
//           <input
//             type="text"
//             placeholder="Search movies by name..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="p-2 border border-gray-300 rounded mr-2"
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//             Search
//           </button>
//         </form>

//         <div className="grid grid-cols-4 gap-4 mb-4">
//           {movieGenres.map((genre) => (
//             <button
//               key={genre.id}
//               className={`px-3 py-1 rounded ${
//                 selectedGenre === genre.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
//               }`}
//               onClick={() => handleGenreButtonClick(genre.id)}
//             >
//               {genre.name}
//             </button>
//           ))}
//         </div>

//         {movies.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {movies.map((movie, index) => (
//               <div key={index} className="bg-white rounded shadow p-4">
//                 <img src={movie.imageUrl} alt={movie.title} className="w-full h-56 object-cover mb-4" />
//                 <h2 className="text-xl font-semibold">{movie.title}</h2>
//                 <p>{movie.year}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No movies found.</p>
//         )}

//         {maxPages > 1 && (
//           <div className="flex justify-center mt-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === 1}
//               onClick={handlePreviousButtonClick}
//             >
//               Previous
//             </button>
//             <span className="mx-4">
//               Page {currentPage} of {maxPages}
//             </span>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === maxPages}
//               onClick={handleNextButtonClick}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Header from './components/Header';
// import Footer from './components/Footer';

// interface User {
//   email: string;
// }

// interface Movie {
//   title: string;
//   imageUrl: string;
//   year: number;
// }

// interface Genre {
//   id: number;
//   name: string;
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
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [maxPages, setMaxPages] = useState<number>(0);
//   const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

//   // Fetch movies from the API using axios
//   const fetchMovies = async (genreId: number | null, page: number) => {
//     const apiKey = 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9';
//     const options = {
//       method: 'GET',
//       url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
//       params: {
//         with_genres: genreId ? genreId.toString() : '',
//         page: page.toString(),
//       },
//       headers: {
//         'X-RapidAPI-Key': apiKey,
//         'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       const data = response.data;
//       setMovies(
//         data.results.map((movie: any) => ({
//           title: movie.title,
//           imageUrl: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             : '',
//           year: parseInt(movie.release_date.substring(0, 4)),
//         }))
//       );
//       setMaxPages(data.total_pages);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//       setMaxPages(0);
//     }
//   };

//   // Handle genre button click
//   const handleGenreButtonClick = (genreId: number) => {
//     setCurrentPage(1);
//     setSelectedGenre(genreId);
//     fetchMovies(genreId, 1);
//   };

//   // Handle the "Previous" button click
//   const handlePreviousButtonClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   // Handle the "Next" button click
//   const handleNextButtonClick = () => {
//     if (currentPage < maxPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const movieGenres: Genre[] = [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' },
//   ];

//   useEffect(() => {
//     fetchMovies(selectedGenre, currentPage);
//   }, [selectedGenre, currentPage]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <div className="flex-grow mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-8">Movie Recommendations</h1>

//         <div className="grid grid-cols-5 gap-4 mb-4">
//           {movieGenres.map((genre) => (
//             <button
//               key={genre.id}
//               className={`px-3 py-1 rounded ${
//                 selectedGenre === genre.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
//               }`}
//               onClick={() => handleGenreButtonClick(genre.id)}
//             >
//               {genre.name}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-5 gap-4">
//           {movies.length > 0 ? (
//             movies.map((movie, index) => (
//               <div key={index} className="bg-white rounded shadow p-4">
//                 <img src={movie.imageUrl} alt={movie.title} className="w-full h-56 object-cover mb-4" />
//                 <h2 className="text-xl font-semibold">{movie.title}</h2>
//                 <p>{movie.year}</p>
//               </div>
//             ))
//           ) : (
//             <p>No movies found.</p>
//           )}
//         </div>

//         {maxPages > 1 && (
//           <div className="flex justify-center mt-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === 1}
//               onClick={handlePreviousButtonClick}
//             >
//               Previous
//             </button>
//             <span className="mx-4">
//               Page {currentPage} of {maxPages}
//             </span>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === maxPages}
//               onClick={handleNextButtonClick}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Header from './components/Header';
// import Footer from './components/Footer';

// interface User {
//   email: string;
// }

// interface Movie {
//   title: string;
//   imageUrl: string;
//   year: number;
// }

// interface Genre {
//   id: number;
//   name: string;
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
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [maxPages, setMaxPages] = useState<number>(0);
//   const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

//   // Fetch movies from the API using axios
//   const fetchMovies = async (genreId: number | null, page: number) => {
//     const apiKey = 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9';
//     const options = {
//       method: 'GET',
//       url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
//       params: {
//         with_genres: genreId ? genreId.toString() : '',
//         page: page.toString(),
//       },
//       headers: {
//         'X-RapidAPI-Key': apiKey,
//         'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       const data = response.data;
//       setMovies(
//         data.results.map((movie: any) => ({
//           title: movie.title,
//           imageUrl: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             : '/placeholder-image.png', // Use a placeholder image if imageUrl is not available
//           year: parseInt(movie.release_date.substring(0, 4)),
//         }))
//       );
//       setMaxPages(data.total_pages);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//       setMaxPages(0);
//     }
//   };

//   // Handle genre button click
//   const handleGenreButtonClick = (genreId: number) => {
//     setCurrentPage(1);
//     setSelectedGenre(genreId);
//     fetchMovies(genreId, 1);
//   };

//   // Handle the "Previous" button click
//   const handlePreviousButtonClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   // Handle the "Next" button click
//   const handleNextButtonClick = () => {
//     if (currentPage < maxPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const movieGenres: Genre[] = [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' },
//   ];

//   useEffect(() => {
//     fetchMovies(selectedGenre, currentPage);
//   }, [selectedGenre, currentPage]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <div className="flex-grow mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-8">Movie Recommendations</h1>

//         <div className="grid grid-cols-5 gap-4 mb-4">
//           {movieGenres.map((genre) => (
//             <button
//               key={genre.id}
//               className={`px-3 py-1 rounded ${
//                 selectedGenre === genre.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
//               }`}
//               onClick={() => handleGenreButtonClick(genre.id)}
//             >
//               {genre.name}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {movies.length > 0 ? (
//             movies.map((movie, index) => (
//               <div key={index} className="bg-white rounded shadow p-4">
//                 <img src={movie.imageUrl} alt={movie.title} className="w-full h-56 object-cover mb-4" />
//                 <h2 className="text-xl font-semibold">{movie.title}</h2>
//                 <p>{movie.year}</p>
//               </div>
//             ))
//           ) : (
//             <p>No movies found.</p>
//           )}
//         </div>

//         {maxPages > 1 && (
//           <div className="flex justify-center mt-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === 1}
//               onClick={handlePreviousButtonClick}
//             >
//               Previous
//             </button>
//             <span className="mx-4">
//               Page {currentPage} of {maxPages}
//             </span>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === maxPages}
//               onClick={handleNextButtonClick}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Header from './components/Header';
// import Footer from './components/Footer';

// interface User {
//   email: string;
// }

// interface Movie {
//   title: string;
//   imageUrl: string;
//   year: number;
//   overview: string;
// }

// interface Genre {
//   id: number;
//   name: string;
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
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [maxPages, setMaxPages] = useState<number>(0);
//   const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

//   const fetchMovies = async (genreId: number | null, page: number) => {
//     const apiKey = 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9';
//     const options = {
//       method: 'GET',
//       url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
//       params: {
//         with_genres: genreId ? genreId.toString() : '',
//         page: page.toString(),
//       },
//       headers: {
//         'X-RapidAPI-Key': apiKey,
//         'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       const data = response.data;
//       setMovies(
//         data.results.map((movie: any) => ({
//           title: movie.title,
//           imageUrl: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             : '/placeholder-image.png',
//           year: parseInt(movie.release_date.substring(0, 4)),
//           overview: movie.overview,
//         }))
//       );
//       setMaxPages(data.total_pages);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//       setMaxPages(0);
//     }
//   };

//   const handleGenreButtonClick = (genreId: number) => {
//     setCurrentPage(1);
//     setSelectedGenre(genreId);
//     fetchMovies(genreId, 1);
//   };

//   const handlePreviousButtonClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handleNextButtonClick = () => {
//     if (currentPage < maxPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const movieGenres: Genre[] = [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' },
//   ];

//   useEffect(() => {
//     fetchMovies(selectedGenre, currentPage);
//   }, [selectedGenre, currentPage]);

//   const showMovieOverview = (movie: Movie) => {
//     setSelectedMovie(movie);
//   };

//   const hideMovieOverview = () => {
//     setSelectedMovie(null);
//   };

//   const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const target = event.target as HTMLDivElement;
//     if (target.id === 'movieOverviewModal') {
//       hideMovieOverview();
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <div className="flex-grow mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-8">Movie Recommendations</h1>

//         <div className="grid grid-cols-5 gap-4 mb-4">
//           {movieGenres.map((genre) => (
//             <button
//               key={genre.id}
//               className={`px-3 py-1 rounded ${
//                 selectedGenre === genre.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
//               }`}
//               onClick={() => handleGenreButtonClick(genre.id)}
//             >
//               {genre.name}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {movies.length > 0 ? (
//             movies.map((movie, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded shadow p-4 cursor-pointer"
//                 onClick={() => showMovieOverview(movie)}
//               >
//                 <img
//                   src={movie.imageUrl}
//                   alt={movie.title}
//                   className="w-full h-56 object-cover mb-4 rounded-t"
//                 />
//                 <h2 className="text-xl font-semibold">{movie.title}</h2>
//                 <p>{movie.year}</p>
//               </div>
//             ))
//           ) : (
//             <p>No movies found.</p>
//           )}
//         </div>

//         {maxPages > 1 && (
//           <div className="flex justify-center mt-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === 1}
//               onClick={handlePreviousButtonClick}
//             >
//               Previous
//             </button>
//             <span className="mx-4">
//               Page {currentPage} of {maxPages}
//             </span>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === maxPages}
//               onClick={handleNextButtonClick}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       {selectedMovie && (
//         <div
//           id="movieOverviewModal"
//           className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
//           onClick={handleOutsideClick}
//         >
//           <div className="bg-white rounded-lg p-4 max-w-md">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={hideMovieOverview}
//             >
//               Close
//             </button>
//             <h2 className="text-xl font-semibold mb-2">{selectedMovie.title}</h2>
//             <p>{selectedMovie.overview}</p>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Header from './components/Header';
// import Footer from './components/Footer';

// interface User {
//   email: string;
// }

// interface Movie {
//   title: string;
//   imageUrl: string;
//   year: number;
//   overview: string;
//   vote_average: number;
// }

// interface Genre {
//   id: number;
//   name: string;
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
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [maxPages, setMaxPages] = useState<number>(0);
//   const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

//   const fetchMovies = async (genreId: number | null, page: number) => {
//     const apiKey = 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9';
//     const options = {
//       method: 'GET',
//       url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
//       params: {
//         with_genres: genreId ? genreId.toString() : '',
//         page: page.toString(),
//       },
//       headers: {
//         'X-RapidAPI-Key': apiKey,
//         'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       const data = response.data;
//       setMovies(
//         data.results.map((movie: any) => ({
//           title: movie.title,
//           imageUrl: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             : '/placeholder-image.png',
//           year: parseInt(movie.release_date.substring(0, 4)),
//           overview: movie.overview,
//           vote_average: movie.vote_average,
//         }))
//       );
//       setMaxPages(data.total_pages);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//       setMaxPages(0);
//     }
//   };

//   const handleGenreButtonClick = (genreId: number) => {
//     setCurrentPage(1);
//     setSelectedGenre(genreId);
//     fetchMovies(genreId, 1);
//   };

//   const handlePreviousButtonClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handleNextButtonClick = () => {
//     if (currentPage < maxPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const movieGenres: Genre[] = [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' },
//   ];

//   useEffect(() => {
//     fetchMovies(selectedGenre, currentPage);
//   }, [selectedGenre, currentPage]);

//   const showMovieOverview = (movie: Movie, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     setSelectedMovie(movie);
//     const modal = document.getElementById('movieOverviewModal');
//     if (modal) {
//       const moviePoster = event.currentTarget as HTMLDivElement;
//       const posterRect = moviePoster.getBoundingClientRect();
//       modal.style.top = `${posterRect.top + window.scrollY}px`;
//       modal.style.left = `${posterRect.left + window.scrollX}px`;
//     }
//   };

//   const hideMovieOverview = () => {
//     setSelectedMovie(null);
//   };

//   const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const target = event.target as HTMLDivElement;
//     if (target.id === 'movieOverviewModal') {
//       hideMovieOverview();
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <div className="flex-grow mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-8">Movie Recommendations</h1>

//         <div className="grid grid-cols-5 gap-4 mb-4">
//           {movieGenres.map((genre) => (
//             <button
//               key={genre.id}
//               className={`px-3 py-1 rounded ${
//                 selectedGenre === genre.id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
//               }`}
//               onClick={() => handleGenreButtonClick(genre.id)}
//             >
//               {genre.name}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {movies.length > 0 ? (
//             movies.map((movie, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded shadow p-4 cursor-pointer relative"
//                 onClick={(event) => showMovieOverview(movie, event)}
//               >
//                 <img
//                   src={movie.imageUrl}
//                   alt={movie.title}
//                   className="w-full h-56 object-cover mb-4 rounded-t"
//                 />
//                 <h2 className="text-xl font-semibold">{movie.title}</h2>
//                 <p>{movie.year}</p>
//                 <div className="absolute bottom-2 right-2 bg-white rounded p-1 text-sm">
//                   IMDB: {movie.vote_average}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No movies found.</p>
//           )}
//         </div>

//         {maxPages > 1 && (
//           <div className="flex justify-center mt-4">
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === 1}
//               onClick={handlePreviousButtonClick}
//             >
//               Previous
//             </button>
//             <span className="mx-4">
//               Page {currentPage} of {maxPages}
//             </span>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={currentPage === maxPages}
//               onClick={handleNextButtonClick}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       {selectedMovie && (
//         <div
//           id="movieOverviewModal"
//           className="fixed z-50 bg-black bg-opacity-50 p-4 rounded-lg"
//           onClick={handleOutsideClick}
//         >
//           <div className="bg-white p-4 rounded-lg">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={hideMovieOverview}
//             >
//               Close
//             </button>
//             <h2 className="text-xl font-semibold mb-2">{selectedMovie.title}</h2>
//             <p>{selectedMovie.overview}</p>
//             <div className="text-sm mt-2">IMDB: {selectedMovie.vote_average}</div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Header from './components/Header';
// import Footer from './components/Footer';

// interface User {
//   email: string;
// }

// interface Movie {
//   title: string;
//   imageUrl: string;
//   year: number;
//   overview: string;
//   vote_average: number;
// }

// interface Genre {
//   id: number;
//   name: string;
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
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [maxPages, setMaxPages] = useState<number>(0);
//   const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

//   const fetchMovies = async (genreId: number | null, page: number) => {
//     const options = {
//       method: 'GET',
//       url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
//       params: {
//         with_genres: genreId ? genreId.toString() : '',
//         page: page.toString(),
//       },
//       headers: {
//         'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
//         'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       const data = response.data;
//       setMovies(
//         data.results.map((movie: any) => ({
//           title: movie.title,
//           imageUrl: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             : '/placeholder-image.png',
//           year: parseInt(movie.release_date.substring(0, 4)),
//           overview: movie.overview,
//           vote_average: movie.vote_average,
//         }))
//       );
//       setMaxPages(data.total_pages);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//       setMaxPages(0);
//     }
//   };

//   const handleGenreButtonClick = (genreId: number) => {
//     setCurrentPage(1);
//     setSelectedGenre(genreId);
//     fetchMovies(genreId, 1);
//   };

//   const handlePreviousButtonClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handleNextButtonClick = () => {
//     if (currentPage < maxPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const movieGenres: Genre[] = [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' },
//   ];

//   useEffect(() => {
//     fetchMovies(selectedGenre, currentPage);
//   }, [selectedGenre, currentPage]);

//   const [expandedMovie, setExpandedMovie] = useState<number | null>(null);

//   const handleMovieClick = (index: number) => {
//     setExpandedMovie((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="text-3xl font-bold mt-4 mb-2 cursor-pointer">Movies list by genres</div>

//       <div className="flex-grow mx-auto p-4">

//         <div className="grid grid-cols-5 gap-4 mb-4">
//           {movieGenres.map((genre) => (
//             <button
//               key={genre.id}
//               className={`px-3 py-1 rounded ${
//                 selectedGenre === genre.id ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-800'
//               }`}
//               onClick={() => handleGenreButtonClick(genre.id)}
//             >
//               {genre.name}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {movies.length > 0 ? (
//             movies.map((movie, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded shadow p-4 cursor-pointer relative transform hover:scale-105 transition-transform"
//                 onClick={() => handleMovieClick(index)}
//               >
//                 {expandedMovie === index ? (
//                   <div className="absolute inset-0 bg-white p-4 rounded-lg shadow">
//                     <button
//                       className="absolute top-2 right-2 text-gray-800 hover:text-gray-600"
//                       onClick={() => handleMovieClick(index)}
//                     >
//                     </button>
//                     <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
//                     <div className="h-48 overflow-y-auto text-gray-800">{movie.overview}</div>
//                     <div className="text-sm mt-2">IMDB: {movie.vote_average}</div>
//                   </div>
//                 ) : (
//                   <>
//                     <img
//                       src={movie.imageUrl}
//                       alt={movie.title}
//                       className="w-full h-56 object-cover mb-4 rounded-t"
//                     />
//                     <h2 className="text-xl font-semibold">{movie.title}</h2>
//                     <p>{movie.year}</p>
//                     <div className="absolute bottom-2 right-2 bg-white rounded p-1 text-sm">
//                       IMDb: {movie.vote_average}
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No movies found.</p>
//           )}
//         </div>

//         {maxPages > 1 && (
//           <div className="flex justify-center mt-4">
//             <button
//               className="px-4 py-2 bg-gray-500 text-white rounded"
//               disabled={currentPage === 1}
//               onClick={handlePreviousButtonClick}
//             >
//               Previous
//             </button>
//             <span className="mx-4">
//               Page {currentPage} of {maxPages}
//             </span>
//             <button
//               className="px-4 py-2 bg-gray-500 text-white rounded"
//               disabled={currentPage === maxPages}
//               onClick={handleNextButtonClick}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from './components/Header';
import Footer from './components/Footer';

interface User {
  email: string;
}

interface Movie {
  title: string;
  imageUrl: string;
  year: number;
  overview: string;
  vote_average: number;
}

interface Genre {
  id: number;
  name: string;
}

const HomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { email } = router.query;

  useEffect(() => {
    if (email) {
      setUser({ email: email as string });
    }
  }, [email]);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(0);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const fetchMovies = async (genreId: number | null, page: number) => {
    const options = {
      method: 'GET',
      url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
      params: {
        with_genres: genreId ? genreId.toString() : '',
        page: page.toString(),
      },
      headers: {
        'X-RapidAPI-Key': 'a720d17dbdmsh54de50158705146p16154cjsn510f59c68bd9',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data;
      setMovies(
        data.results.map((movie: any) => ({
          title: movie.title,
          imageUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : '/placeholder-image.png',
          year: parseInt(movie.release_date.substring(0, 4)),
          overview: movie.overview,
          vote_average: movie.vote_average,
        }))
      );
      setMaxPages(data.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
      setMaxPages(0);
    }
  };

  const handleGenreButtonClick = (genreId: number) => {
    setCurrentPage(1);
    setSelectedGenre(genreId);
    fetchMovies(genreId, 1);
  };

  const handlePrevious10ButtonClick = () => {
    const newPage = currentPage - 10;
    if (newPage >= 1) {
      setCurrentPage(newPage);
    } else {
      setCurrentPage(1);
    }
  };

  const handleNext10ButtonClick = () => {
    const newPage = currentPage + 10;
    if (newPage <= maxPages) {
      setCurrentPage(newPage);
    } else {
      setCurrentPage(maxPages);
    }
  };

  const handlePreviousButtonClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currentPage < maxPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const movieGenres: Genre[] = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ];

  useEffect(() => {
    fetchMovies(selectedGenre, currentPage);
  }, [selectedGenre, currentPage]);

  const [expandedMovie, setExpandedMovie] = useState<number | null>(null);

  const handleMovieClick = (index: number) => {
    setExpandedMovie((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="text-3xl font-bold mt-4 mb-2 cursor-pointer text-center">Movies listed by genres</div>

      <div className="flex-grow mx-auto p-4">
        <div className="grid grid-cols-5 gap-4 mb-4">
          {movieGenres.map((genre) => (
            <button
              key={genre.id}
              className={`px-3 py-1 rounded ${
                selectedGenre === genre.id ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
              onClick={() => handleGenreButtonClick(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div
                key={index}
                className="bg-white rounded shadow p-4 cursor-pointer relative transform hover:scale-105 transition-transform"
                onClick={() => handleMovieClick(index)}
              >
                {expandedMovie === index ? (
                  <div className="absolute inset-0 bg-white p-4 rounded-lg shadow">
                    <button
                      className="absolute top-2 right-2 text-gray-800 hover:text-gray-600"
                      onClick={() => handleMovieClick(index)}
                    >
                    </button>
                    <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                    <div className="h-48 overflow-y-auto text-gray-800">{movie.overview}</div>
                    <div className="text-sm mt-2">IMDB: {movie.vote_average}</div>
                  </div>
                ) : (
                  <>
                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      className="w-full h-56 object-cover mb-4 rounded-t"
                    />
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    <p>{movie.year}</p>
                    <div className="absolute bottom-2 right-2 bg-white rounded p-1 text-sm">
                      IMDb: {movie.vote_average}
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>

        {maxPages > 1 && (
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              disabled={currentPage <= 1}
              onClick={handlePrevious10ButtonClick}
            >
              Previous 10
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded mx-2"
              disabled={currentPage <= 1}
              onClick={handlePreviousButtonClick}
            >
              Previous
            </button>
            <span className="mx-4">
              Page {currentPage} of {maxPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded mx-2"
              disabled={currentPage >= maxPages}
              onClick={handleNextButtonClick}
            >
              Next
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              disabled={currentPage >= maxPages}
              onClick={handleNext10ButtonClick}
            >
              Next 10
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
