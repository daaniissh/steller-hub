import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'
import MovieDashboard from './pages/Dashbord';
import MovieForm from './pages/MovieEdit';
import GenreForm from './pages/GenreForm';
import MovieCard from './component/MovieCard';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MovieDashboard />} />
      <Route path="/movies" element={<MovieForm />} />
      <Route path="/movieEdit/:id" element={<MovieForm />} />
      <Route path="/genre" element={<GenreForm />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};


export default App
