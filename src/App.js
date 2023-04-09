import React from 'react';
import './App.css';
import { useState } from "react";

//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heading from './Heading/Heading';
import AboutUs from './AboutUs/AboutUs'
import Location from './Location/Location';
import Presentes from './Presentes/Presentes';
import GoogleForm from './GoogleForm/GoogleForm';
import Confirmation from './Confirmation/Confirmation';
import NavBar from './NavBar/NavBar';

export default function App(props) {
  const HOME_PAGE = 'Home';
  const ABOUT_PAGE = 'AboutUs';
  const LOCATION_PAGE = 'Location';
  const GIFTS_PAGE = 'Gifts';
  const CONFIRMATIONS_PAGE = 'Confirmations';
  const CONTACT_PAGE = 'Contact';
  const [selectedPage, setSelectedPage] = useState(HOME_PAGE);

  const handleNewPageSelection = (page) => {
    setSelectedPage(page);
    console.log(selectedPage)
  }


  return (
    <>
      <NavBar handleDisplayPage={(page) => handleNewPageSelection(page)}/>
      {selectedPage === HOME_PAGE && <Heading />}
      {selectedPage === ABOUT_PAGE && <AboutUs />}
      {selectedPage === LOCATION_PAGE && <Location />}
      {selectedPage === GIFTS_PAGE && <Presentes />}
      {selectedPage === CONFIRMATIONS_PAGE && <Confirmation />}
      {selectedPage === CONTACT_PAGE && <GoogleForm />}
      {/* <Routes>
        <Route exact path="/" element={<Heading />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/gifts" element={<Presentes />} />
        <Route exact path="/confirmation" element={<Confirmation />} />
        <Route exact path="/contact" element={<GoogleForm />} />
      </Routes> */}
    </>
  );
}

