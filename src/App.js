import './App.css';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import UserPage from './UserPage';
// import NavBar from './NavBar/NavBar';
import Heading from './Heading/Heading';
import Countdown from './Countdown/Countdown';
import NavBar from './NavBar/NavBar';
import AboutUs from './AboutUs/AboutUs';

function App() {
  return (
    <>
    {/* <NavBar /> */}
    <NavBar />
    <Heading />
    <AboutUs />
    <Countdown />
    {/* <Routes>

      <Route exact path="/" component={HomePage} />

      <Route path="/:id" component={UserPage} />

    </Routes> */}
    </>
  );
}

export default App;
