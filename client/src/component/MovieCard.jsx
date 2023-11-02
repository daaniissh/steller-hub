import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

// Import DaisyUI classes
import axios from 'axios';
import Tooltip from './Tooltip';

const MovieCard = ({country,USAamazon,BZamazon, title, amazon,flipkart,productNum, imageUrl, id, setAllMovies, movieList }) => {
  const [num, setNum] = useState()
  const handleDelete = async () => {

    const response = await axios("https://steller-hub-server.vercel.app/api/movies", {
      method: "DELETE",
      data: { id }
    })

    const newList = movieList.filter((item) => item._id !== response.data._id)
    setAllMovies(newList)

  }




const ct = country === "United States" && !USAamazon || country === "India" && !amazon || country === "Brazil" && !BZamazon 



  return (
  
    <div data-aos="zoom-in" className={ct ? "hidden w-full":"flex justify-center"}>

      <div className="bg-gray-50 border border-gray-100 flex flex-col justify-center items-center w-72  md:w-64  shadow-2xl rounded-lg p-4">
        <img src={imageUrl} alt={title} className=" w-[200px]  h-[170px] object-contain  rounded-md " />

        <h2 className="text-lg text-gray-800 text-center  font-bold mt-2 capitalize">{title}</h2>
        <p className="text-gray-400 text-[12px] font-normal text-center mb-2"></p>
        <hr className='w-full text-gray-400' />
        <p className='text-stone-300 font-medium text-[12px]' >Links ↓</p>
        <div className="flex items-center  w-full h-full justify-center mt-1  gap-5">
          <div className="flex w-full items-center justify-center h-full">
            <a href={country === "India" && amazon  || country === "United States" && USAamazon || country === "Brazil" && BZamazon}>
              <button className="text-[14px] hover:border-gray-400 duration-150 border capitalize items-center flex justify-center py-2 px-6 rounded-lg gap-1    font-semibold  bg-white text-[#232f3e] shadow-md">
                <img width="15" height="15" src="https://www.pngmart.com/files/Amazon-Logo-PNG-Transparent.png" />
                Amazon
              </button>
            </a>

          </div>
          {country === "India" && <div className="flex w-full items-center justify-center h-full">
           <Tooltip data="No item on Flipkart" tooltip={flipkart ? "":"tooltip"}> <a href={flipkart} ><button disabled={flipkart === "" ? true : false} className={flipkart === "" ?"contrast-50  text-[14px] border capitalize items-center flex justify-center py-2 px-6 rounded-lg gap-1 font-semibold bg-white duration-200 shadow-md text-[#047BD5]":"  text-[14px] border hover:border-blue-500 capitalize items-center flex justify-center py-2 px-6 rounded-lg gap-1 font-semibold bg-white duration-200 shadow-md text-[#047BD5]" }>
              <img width="20" height="20" src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-icon-23.png" alt="" />
              flipkart
            </button></a>
            </Tooltip>
          </div>}
        </div>
      </div>
    </div>
 
  );
};

export default MovieCard;
