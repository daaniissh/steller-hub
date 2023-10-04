import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
const GenreForm = () => {
  const [genres, setGenres] = useState([{}]);
  const [newGenre, setNewGenre] = useState('');
  // const [editIndex, setEditIndex] = useState(-1);
  const [genreId, setGenreId] = useState(0);

  useEffect(() => {
    getAllGenre()
  }, [])
  const getAllGenre = async () => {
    const response = await axios.get('https://q7zdpk-3005.csb.app/api/genres')
    setGenres(response.data)


  }
  const handleGenreChange = (event) => {
    setNewGenre(event.target.value);
  };

  const handleAddGenre = async (event) => {
    event.preventDefault();
    const response = await axios.post('https://q7zdpk-3005.csb.app/api/genres', {
      data: {
        id: genreId,
        title: newGenre
      }
    }

    )
    if (response.status == 200 && genreId != 0) {
      const index = genres.findIndex((item) => item._id == genreId);
      const genList = [...genres];
      genList[index].title = newGenre;
      setGenres(genList);
      setNewGenre("");
      setGenreId(0);
      getAllGenre()
    } else {
      let NewList = [...genres, response?.data];
      setGenres(NewList);
      setNewGenre("");
    }

  };

  const handleEditGenre = async (index, title, id) => {
  
    setGenreId(id)
    setNewGenre(title)
  };

  const handleDeleteGenre = async (id) => {
    confirm("permenantaly delete? sure!")
    const response = await axios.delete('https://q7zdpk-3005.csb.app/api/genres', {
      data: {
        id,
      }
    })
    if (response.status === 200) {
      let newList = genres.filter(gen => gen._id !== id)
      setGenres(newList)
    }
  };



  return (
    <>
      <Sidebar />
      <div className="w-full h-screen bg-gray-200 py-8">
        <form onSubmit={handleAddGenre} className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
          <div className="flex items-center mb-4">
            <input type="text" placeholder="Enter genre" value={newGenre}
              onChange={handleGenreChange} className="input input-bordered w-full max-w-xs" />
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Enter
            </button>
          </div>
        </form>
        <div className="flex flex-row flex-wrap justify-center  max-w-lg mx-auto mt-4">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={genreId === genre._id ? "flex items-center m-2 w-[150px]  justify-center mb-2 bg-gray-600 text-white rounded-lg shadow px-2 py-5" : "flex items-center m-2 w-[150px]  justify-center mb-2 bg-white rounded-lg shadow px-2 py-5"
              }>
              <p className="mr-2 font-semibold capitalize">{genre.title}</p>
              <div className='flex justify-between items-center' >
                <button
                  onClick={() => handleEditGenre(index, genre.title, genre._id)}
                  className="text-blue-500 hover:text-blue-800 text-lg mr-2"
                >
                  <AiFillEdit />
                </button>
                <button
                  onClick={() => handleDeleteGenre(genre._id)}
                  className="text-red-500 hover:text-red-800 text-lg"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GenreForm;
