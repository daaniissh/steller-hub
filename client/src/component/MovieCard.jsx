import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

// Import DaisyUI classes
import 'daisyui/dist/full.css';
import StarRating from './startRating';
import MovieStars from './startRating';
import StartRating from './startRating';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Tooltip from './Tooltip';

const MovieCard = ({ title, genre, rating, imageUrl, id ,setAllMovies,movieList}) => {
  const handleDelete =async () => {
     
      const response = await axios("http://localhost:3005/api/movies", {
        method: "DELETE",
        data: { id }
      })

      const newList = movieList.filter((item) => item._id !== response.data._id)
      setAllMovies(newList)
    
  }

  return (
    <div className="flex ">
      <img src={imageUrl} alt={title} className="  w-[140px] h-[300px] object-cover rounded-lg " />

      <div className="bg-gray-100 flex flex-col justify-between  shadow-2xl rounded-md p-4">

        <h2 className="text-xl text-gray-800 font-bold mb-2 capitalize">{title}</h2>
        <p className="text-gray-600 font-normal mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, incidunt.</p>
        <div className="">
          {genre?.map((item, index) => (
            <div className="badge badge-accent badge-outline ml-1" key={item._id} >{item.title}</div>
          ))}
        </div>

        <div className="flex items-center ml-1 mb-4 h-auto rating rating-sm">
          <StartRating rating={rating} id={id} title={title} />
          <p className="text-orange-600 mb-1 mt-1 ml-3 font-bold">{(rating / 25) + 1} Star</p>
        </div>
        <div className="flex items-end justify-end">
          <Tooltip data={"Click and Edit"} > <Link to={`movieEdit/${id}`} className="btn btn-primary  mr-2"><AiFillEdit /></Link></Tooltip>
            
         
         <Tooltip data={"Permenantaly delete!"} > <button onClick={handleDelete}  className="btn btn-primary "><AiFillDelete /></button></Tooltip>
         
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
