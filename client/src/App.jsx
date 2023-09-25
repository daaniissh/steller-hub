import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'
import MovieDashboard from './pages/Dashbord';
import MovieForm from './pages/MovieEdit';
import GenreForm from './pages/GenreForm';
import MovieCard from './component/MovieCard';
import MovieDashboardC from './pages/Dashbord copy';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const App = () => {
  AOS.init();
  return (
    
    <Routes>
      <Route exact path="/" element={<MovieDashboard />} />
      <Route exact path="/admin/9946" element={<MovieDashboardC />} />
      <Route path="/movies/994672" element={<MovieForm />} />
      <Route path="/admin/9946/movieEdit/:id" element={<MovieForm />} />
      <Route path="/genre/994672" element={<GenreForm />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};


export default App
