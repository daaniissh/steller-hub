import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { HiOutlineLogout } from 'react-icons/hi';

// Import DaisyUI classes
import 'daisyui/dist/full.css';
import Tooltip from './Tooltip';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-20 fixed left-0 top-0 flex flex-col items-center">
      <div className="my-4  flex w-10 rounded-lg justify-center text-center">
        <Tooltip data="Home" tooltip="tooltip tooltip-right" >   <Link to="/rr" className="btn btn-primary btn-ghost btn-lg w-full p-2">
          <AiOutlineHome/>
        </Link></Tooltip>
     
      </div>
      <div className="my-4 duration-200 ease-in justify-center rounded-lg   flex w-10">
      <Tooltip data="Add Movie" tooltip="tooltip tooltip-right" ><Link to="/" className="btn btn-primary btn-ghost btn-lg w-full p-2">
          <MdOutlineLocalMovies/>
        </Link></Tooltip>
        
      </div>
      <div className="my-4 duration-200 ease-in justify-center rounded-lg   flex w-10">
      <Tooltip data="Add Genre" tooltip="tooltip tooltip-right" >  <Link to="/admin" className="btn btn-primary btn-ghost btn-lg w-full p-2">
          <MdOutlineFeaturedPlayList/>
        </Link></Tooltip>
      
      </div>
      <div className="mb-10 duration-200 ease-in justify-center rounded-lg items-end h-full flex w-10">
        <button className="btn btn-primary btn-ghost btn-lg w-full p-2">
          <HiOutlineLogout/>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
