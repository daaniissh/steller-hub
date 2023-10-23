import React, { useEffect, useState } from 'react';

// Import DaisyUI classes
import 'daisyui/dist/full.css';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([{}]);
  // const [upImage, setUpImage] = useState()
  const [rating, setRating] = useState(0);
  const [movieId, setMovieId] = useState(0);
  const [amazon, SetINamazon] = useState("");
  const [USAamazon, SetUSAamazon] = useState("");
  const [BZamazon, SetBZamazon] = useState("");
  const [flipkart, setFlipkart] = useState("");
  const [productNum, setProductNum] = useState("");
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState("");
  const [cImage, setCImage] = useState("");
  const [uImage, setUImage] = useState("");
  const [loading, setLoading] = useState(false)

  const params = useParams()
  const navigation = useNavigate()
  useEffect(() => {
    getAllGenre()
    if (params.id) {
      getMoviesUpdate()
    }
  }, [])

  const getMoviesUpdate = async () => {
    const response = await axios('https://steller-hub-server.vercel.app/api/movies/movieById', {
      method: "POST",
      data: { id: params.id }

    })
    const { ratings, genre, title, _id,USAamazon,BZamazon, imageName ,amazon,flipkart,productsNum} = response?.data;

    setTitle(title)
    SetINamazon(amazon)
    SetUSAamazon(USAamazon)
    SetBZamazon(BZamazon)
    setFlipkart(flipkart)
    setProductNum(productsNum)
    setMovieId(_id)
    setGenre(genre)
    setUImage(imageName)
    setRating(ratings)
  }

  const getAllGenre = async () => {
    const response = await axios.get('https://steller-hub-server.vercel.app/api/genres')
    setGenres(response.data)
    

  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    
    setRating(event.target.value);
  };
  const handlePRnumChange = (event) => {
    
    setProductNum(event.target.value);
  };
  const handleIamazonChange = (event) => {
    
    SetINamazon(event.target.value);
  };
  const handleBZAmazonChange = (event) => {
    
    SetBZamazon(event.target.value);
  };
  const handleUSAAmazonChange = (event) => {
    
    SetUSAamazon(event.target.value);
  };
  const handleFlipChange = (event) => {
    
    setFlipkart(event.target.value);
  };

  const handleGenreChange = (event) => {
   
    const id = event.target.id;
    if (!genre.includes(id) && event.target.checked) {
      setGenre([...genre, id]);
    } else {
      const newList = genre.filter((item) => item != id);
      setGenre(newList);
    }

  };

  const handleImageChange = (event) => {
    const img = event.target.files[0];
    setImage(img);
    setUImage(URL.createObjectURL(img));
  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let movieImageUrlCondition = movieId == 0 ? "" : uImage;
    if (movieId == 0) {
      var data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "kbdydx0z");
      data.append("cloud_name", "doonbcqw7");

      const config = {
        method: "POST",
        body: data,
      };

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/doonbcqw7/image/upload", config);
        const responseData = await response.json();

        movieImageUrlCondition = responseData.url
        setUImage(responseData.url)
        // Do something with the responseData
      } catch (error) {
        console.log(error);
        // Handle the error
      }
      try {

        if (movieImageUrlCondition != "") {
          setLoading(true)
          const response = await axios("https://steller-hub-server.vercel.app/api/movies", {
            method: "POST",
            data: {
              imageName: movieImageUrlCondition,
              title,
              amazon,
              USAamazon,
              BZamazon,
              flipkart,
              productsNum:productNum,
              // id: movieId,
              ratings: rating,
              genre
            },
          });
          if ((response.status = 200)) {
      
            navigation('/')
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      } finally {
        setLoading(false)
      }

    }


    try {
      if (movieId != 0) {
        setLoading(true)
        const response = await axios('https://steller-hub-server.vercel.app/api/movies/update', {
          method: "PUT",
          data: {
            id: movieId,
            title,
            amazon,
            USAamazon,
            BZamazon,
            flipkart,
            productsNum:productNum,
            ratings: rating,
            genre,
            imageName: uImage
          }
        })
        if ((response.status == 200)) {
          navigation('/')
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }


  };


  return (
    <>
      <Sidebar />
      <div className="max-w-md ml-[100px] sm:mx-auto mt-10 bg-gray-200 p-4 shadow-2xl border border-gray-300 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-between items-center">
            <div className="">
              <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                Add Image
              </label>
              <input type="file" onChange={handleImageChange} className="file-input file-input-bordered text-gray-900 w-full max-w-xs" />
            </div>
            {uImage && <div className="rounded-xl ml-3">
              <img src={uImage} className='w-44 h-44 object-contain rounded-xl' alt="" />
            </div>}

          </div>

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              productNum
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={productNum}
              onChange={handlePRnumChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Amazon(India)
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={amazon}
              onChange={handleIamazonChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Amazon(USA)
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={USAamazon}
              onChange={handleUSAAmazonChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Amazon(Brazil)
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={BZamazon}
              onChange={handleBZAmazonChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Flipkart(India)
            </label>
            <input
              placeholder='Title'
              type="text"
              id="title"
              className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={flipkart}
              onChange={handleFlipChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
              Rating
            </label>
            <input onChange={handleRatingChange} type="range"
              min={0}
              max="100"
              value={rating}
              className="range"
              step="25" />
            <div className="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>

          </div>
          <div className="my-3 flex justify-between flex-wrap">


            {genres.map((item, index) => (
              <div className="form-control ">
                <label key={index} className="label cursor-pointer space-x-2">
                  <span className="label-text font-semibold capitalize">{item.title}</span>
                  <input
                    id={item._id}
                    name={item.title}
                    onChange={handleGenreChange}
                    type="checkbox"
                    checked={genre.includes(item._id) || false}
                    className="checkbox checkbox-secondary"

                  />
                </label>
              </div>
            ))
            }


          </div>
          <button
            disabled={loading}
            type="submit"
            className="btn btn-primary mt-4 w-full"
          >
            {loading ? "Entering...." : "Submit"}
          </button>
        </form>

      </div>
    </>
  );
};

export default MovieForm;
