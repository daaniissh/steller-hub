import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'
import MovieDashboard from './pages/Dashbord';
import MovieForm from './pages/MovieEdit';
import GenreForm from './pages/GenreForm';
import MovieCard from './component/MovieCard';
import MovieDashboardC from './pages/Dashbord copy';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const App = () => {
  AOS.init();
  return (
    
    <Routes>
     
      <Route exact path="/" element={<MovieDashboard />} />
      <Route exact path="/admin" element={<MovieDashboardC />} />
      <Route path="/fff" element={<MovieForm />} />
      <Route path="/admin/movieEdit/:id" element={<MovieForm />} />
      <Route path="/genre/994672" element={<GenreForm />} />
      {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
    
  );
};


export default App
