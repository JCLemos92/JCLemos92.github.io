import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heading from './Heading/Heading';
import AboutUs from './AboutUs/AboutUs'
import Location from './Location/Location';
import Presentes from './Presentes/Presentes';
import GoogleForm from './GoogleForm/GoogleForm';
import Navigation from './Navigation/Navigation';
import Confirmation from './Confirmation/Confirmation';

export default function App() {

  return (
    <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Heading />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gifts" element={<Presentes />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/contact" element={<GoogleForm />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
