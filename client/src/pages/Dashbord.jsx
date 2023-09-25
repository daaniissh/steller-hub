import React, { useEffect, useState } from 'react';
import MovieCard from '../component/MovieCard';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
import Header from '../component/header';
import AnimatePage from '../animation/Animation'
const MovieDashboard = () => {

  const [allMovies, setAllMovies] = useState([{}])
  const [FlMovies, setFlMovies] = useState([{}])
  const [data, setData] = useState()
  const [search, setSearch] = useState("")
  useEffect(() => {
    getAllMovies()

  }, [])
  const getAllMovies = async () => {
    const response = await axios.get("https://steller-hub.onrender.com/api/movies/moviesWithGenre")
    setData(response.data)
    setAllMovies(response.data)
  }
  const handleChange = (e) => {
    setSearch(e.target.value)


    let item = allMovies.filter((data) => {
      return data.title.toLowerCase().includes(search.toLowerCase())
    })

    setData(e.target.value.length != 0 ? item : allMovies)
    console.log(allMovies, e.target.value.length);

  }


  return (
    <>
      <Header />
      <div style={{ fontFamily: "'Poppins', sans-serif" }} className='flex'>
        <div className="flex-grow  bg-primary-200 min-h-screen"> {/* Converted color class */}
          {/* ... */}
          <main className="container mx-auto px-4 py-8">

            <AnimatePage initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 2, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{
              ease: "ease",
              duration: 0.9
            }} >
              <div className="w-full flex  justify-center">
                <div className="form-control w-full max-w-xs">
                 
                  <input type="text" onChange={handleChange} value={search} placeholder="Search Products" className="input input-bordered w-full max-w-sm" />

                </div>

              </div>
            </AnimatePage>

            <AnimatePage initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 2, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{
              ease: "ease",
              duration: 0.9
            }} >
              <div className="flex w-full justify-center flex-col mt-5 ">
                <h1 className="text-lg text-center font-semibold">ShopNow 👜 ,Your Online Retail Destination</h1>
                <p className='mb-4 text-stone-600 text-center font-medium' >Products ↓</p>
              </div>
            </AnimatePage>
            <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data?.map((item, index) => (
                <MovieCard
                  key={index}
                  setAllMovies={setAllMovies}
                  movieList={allMovies}
                  id={item._id}
                  imageUrl={item.imageName}
                  title={item.title}
                  amazon={item.amazon}
                  flipkart={item.flipkart}
                  productNum={item.productsNum}
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
    </>
  );
};

export default MovieDashboard;
