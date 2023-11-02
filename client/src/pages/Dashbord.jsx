import React, { useEffect, useState } from 'react';
import MovieCard from '../component/MovieCard';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
import Header from '../component/header';
import AnimatePage from '../animation/Animation'
import CustomSelect from '../component/Dropdown';
import {useNavigate} from 'react-router-dom'
import Dropdown from '../component/Dropdown';
const MovieDashboard = () => {

  const [allMovies, setAllMovies] = useState([{}])
  const [FlMovies, setFlMovies] = useState([{}])
  const [data, setData] = useState()
  const [country,setCountry] = useState("")
  const [spin, setSpin] = useState(false)
  const [ct, setCt] = useState(false)
  const [search, setSearch] = useState("")
  useEffect(() => {
    setSpin(true)
    getAllMovies()

  }, [])
  const navigate = useNavigate()
  useEffect(() => {
    const handleKeyPress = (event) => {
      
      if (event.key === 'I' && event.shiftKey) {
        // Call your function here
        navigate("/admin")
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const yourFunction = () => {
    console.log('Ctrl + A + D pressed!');
  };

  const getAllMovies = async () => {
    try {
      const response = await axios.get("https://steller-hub-server.vercel.app/api/movies/products")
      setSpin(true)
      const reversedArr = [];
      for (let i = response.data.length - 1; i >= 0; i--) {
        reversedArr.push(response.data[i]);
      }
      setData(reversedArr)
      setAllMovies(reversedArr)
    } catch (error) {
      setSpin(false)
    } finally {
      setSpin(false)
    }
  }
  const handleChange = (e) => {
    setSearch(e.target.value)


    let item = allMovies.filter((data) => {
      return data.title.toLowerCase().includes(search.toLowerCase())
    })

    setData(e.target.value.length != 0 ? item : allMovies)
    console.log(allMovies, e.target.value.length);

  }
  useEffect(() => {
    getCountryName();
    setSpin(NOT_FOUND === "Not found" ? true : false)
  }, []);
  
  const getCountryName = async () => {
    fetch('https://api.geoapify.com/v1/ipinfo?apiKey=0d6c29af0b7d424f86636d38e5709382')
    .then(response => response.json())
    .then(data => {
      // You can now access the location data in the "data" object
setCt(true)
          setCountry(data.country.name)
      
    
      console.log(data.country.name);
    })
  };
  
 
  
const NOT_FOUND = country !== "India" && country !== "United States" && country !== "Brazil" ? "Not found" : country



  return (
    <>
    <Header country={country} not={NOT_FOUND} ct={ct}/>
     {country !== "India" && country !== "United States" && country !== "Brazil" && ct ?  <div className='flex w-full h-[70vh] justify-center items-center flex-col select-none'>
                  
                    <img src="not.png" alt="" /> 
                     <h2 className='font-mono font-extrabold'> Sorry this website not available in your country</h2>
      </div> : <div style={{ fontFamily: "'Poppins', sans-serif" }} className={NOT_FOUND === "Not found" ? 'hidden':"flex"}>
        <div className="flex-grow  bg-primary-200 min-h-screen"> {/* Converted color class */}
          {/* ... */}
          <main className="container mx-auto px-4 py-8">
          
            {/* <CustomSelect
              value={val}
              onChange={setVal}
              options={countries}
              placeholder="Choose an option..."
            /> */}
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
            {spin ? <div className='w-full h-72 flex justify-center items-center flex-col' >
              <svg width="40" height="40" fill='#42858C' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite" /></path></svg>
              <p className='font-medium text-sm text-stone-400 mt-2 ' >Products are loading... </p>

            </div> :
              <div className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                {data?.map((item, index) => (
                  <MovieCard
                  country={country}
                    key={index}
                    setAllMovies={setAllMovies}
                    movieList={allMovies}
                    id={item._id}
                    imageUrl={item.imageName}
                    title={item.title}
                    amazon={item.amazon}
                    USAamazon={item.USAamazon}
                    BZamazon={item.BZamazon}
                    flipkart={item.flipkart}
                    productNum={item.productsNum}
                    genre={item.genre}
                    rating={item.ratings}
                  />
                ))}
                {/* Add more MovieCard components with different movie details */}
              </div>}
          </main>
          {/* ... */}
        </div>
      </div>  }
    </>
  );
};

export default MovieDashboard;
