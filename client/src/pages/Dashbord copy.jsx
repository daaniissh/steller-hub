import React, { useEffect, useState } from 'react';
import MovieCard from '../component/MovieCard';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
import MovieCardC from '../component/MovieCard copy';

const MovieDashboardC = () => {
  useEffect(() => {
    getAllMovies()
  }, [])
  const [allMovies,setAllMovies] = useState([{}])
  const getAllMovies=async()=>{
    const response = await axios.get("https://steller-hub-server.vercel.app/api/movies/moviesWithGenre")
    setAllMovies(response.data)
  }

  
  return (
    <div className='flex'>
      {/* <Sidebar /> */}
      <div className="flex-grow  bg-primary-200 min-h-screen"> {/* Converted color class */}
        {/* ... */}
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className='mb-4 text-stone-600 font-medium' >ShopNow 👜 ,Your Online Retail Destination</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {  allMovies.map((item,index)=>(
              <MovieCardC
              key={index}
              setAllMovies={setAllMovies}
              movieList={allMovies}
              id={item._id}
              imageUrl={item.imageName}
              title={item.title}
              genre={item.genre}
              rating={item.ratings}
            />
            ))}
            {/* Add more MovieCard components with different movie details */}
          </div>
        </main>
        {/* ... */}
      </div>
    </div>
  );
};

export default MovieDashboardC;
