import React from "react";
import './NavBar.css'
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function NavBar(props) {
  const HOME_PAGE = 'Home';
  const ABOUT_PAGE = 'AboutUs';
  const LOCATION_PAGE = 'Location';
  const GIFTS_PAGE = 'Gifts';
  const CONFIRMATIONS_PAGE = 'Confirmations';
  const CONTACT_PAGE = 'Contact';
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [ onTop, setonTop ] = useState(false);
  const [burguerMoved, setBurgerMoved] = useState(false);
  const [selectedPage, setSelectedPage] = useState(HOME_PAGE);
  let event = new Event('Home');

  const handleNewPageSelection = (page) => {
    setSelectedPage(page);
    props.handleDisplayPage(page);
    if(page === HOME_PAGE) {
      setonTop(true); 
      setBurgerMoved(false);
    
    } else {
      setonTop(false); 
      setBurgerMoved(true)
    }
  }

  const listenScrollEvent = () => {
    window.scrollY > 80
      ? setonTop(false)
      : setonTop(true);
    window.scrollY > window.innerHeight
      ? setBurgerMoved(true)
      : setBurgerMoved(false);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <div class="fixed w-full float-right">
      <nav class="w-full float-right">
        <section class="MOBILE-MENU flex lg:hidden justify-between top-0 z-50 px-8 py-8 right-0 float-right">
          <div
            class="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span class={
              burguerMoved ? 
              "block h-0.5 w-8 bg-[#6c8ea7]" :
              "block h-0.5 w-8 bg-white"
            }></span>
            <span class={
              burguerMoved ? 
              "block h-0.5 w-8 bg-[#6c8ea7]" :
              "block h-0.5 w-8 bg-white"
            }></span>
            <span class={
              burguerMoved ? 
              "block h-0.5 w-8 bg-[#6c8ea7]" :
              "block h-0.5 w-8 bg-white"
            }></span>
          </div>

          <div class={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              class="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                class="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul class="MENU-LINK-MOBILE-OPEN flex flex-col mt-14 ml-5 mr-5 h-full">
              <li 
              class={selectedPage === HOME_PAGE ? 
              "border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer" :
              "border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer"
              }>
                <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {handleNewPageSelection(HOME_PAGE);}}>
                Início
                </Link>
              </li>
              <li 
              class={selectedPage === ABOUT_PAGE ? 
              "border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer" :
              "border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer"}
              >
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNewPageSelection(ABOUT_PAGE)}>
                  Sobre Nós
                </Link>
              </li>
              <li 
              class={selectedPage === LOCATION_PAGE ? 
              "border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer" :
              "border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer"}
              >
                <Link
                to="location"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleNewPageSelection(LOCATION_PAGE)}>
                Onde
              </Link>
              </li>
              <li 
              class={selectedPage === GIFTS_PAGE ? 
              "border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer" :
              "border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer"}>
                <Link
                to="gifts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleNewPageSelection(GIFTS_PAGE)}>
                Presentes
              </Link>
              </li>
              <li
              class={selectedPage === CONFIRMATIONS_PAGE ? 
              "border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer" :
              "border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer"}>
                <Link
                to="confirmation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleNewPageSelection(CONFIRMATIONS_PAGE)}>
                Confirmações
              </Link>
              </li>
              <li 
              class={selectedPage === CONTACT_PAGE ? 
              "border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer" :
              "border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer"}>
              <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNewPageSelection(CONTACT_PAGE)}>
              Contacto
            </Link>
          </li>
            </ul>
          </div>
        </section>

        <ul class={onTop ? 
        "DESKTOP-MENU hidden lg:flex top-0 z-50 py-4 float-right px-20 w-full shadow-sm flex-row-reverse text-white bg-slate-500 bg-opacity-30 	" :
        "DESKTOP-MENU hidden lg:flex top-0 z-50 py-4 float-right px-20 bg-[#6c8ea7] w-full shadow-sm flex-row-reverse text-white"
        }>
        <li 
        class={selectedPage === CONTACT_PAGE ? 
              "border-b border-white-400 mx-10 hover:cursor-pointer" :
              "mx-10 hover:cursor-pointer"}
        >
            <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNewPageSelection(CONTACT_PAGE)}>
            Contacto
          </Link>
          </li>
          <li
          class={selectedPage === CONFIRMATIONS_PAGE ? 
              "border-b border-white-400 mx-10 hover:cursor-pointer" :
              "mx-10 hover:cursor-pointer"} 
          >
            <Link
            to="confirmation"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNewPageSelection(CONFIRMATIONS_PAGE)}>
            Confirmações
          </Link>
          </li>
          <li 
          class={selectedPage === GIFTS_PAGE ? 
              "border-b border-white-400 mx-10 hover:cursor-pointer" :
              "mx-10 hover:cursor-pointer"}
              >
            <Link
            to="gifts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNewPageSelection(GIFTS_PAGE)}>
            Presentes
          </Link>
          </li>
          <li class={selectedPage === LOCATION_PAGE ? 
              "border-b border-white-400 mx-10 hover:cursor-pointer" :
              "mx-10 hover:cursor-pointer"}>
            <Link
              to="location"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNewPageSelection(LOCATION_PAGE)}>
              Onde
            </Link>
          </li>
          <li class={selectedPage === ABOUT_PAGE ? 
              "border-b border-white-400 mx-10 hover:cursor-pointer" :
              "mx-10 hover:cursor-pointer"}>
            <Link
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNewPageSelection(ABOUT_PAGE)}>
              Sobre Nós
            </Link>
          </li>
          <li cclass={selectedPage === HOME_PAGE ? 
              "border-b border-white-400 mx-10 hover:cursor-pointer" :
              "mx-10 hover:cursor-pointer"}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNewPageSelection(HOME_PAGE)}>
              Início
            </Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block
        position: absolute;
        width: fit-content;
        background-color: rgba(108, 142, 167, 0.9);
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        opacity: 70%;
      }
    `}</style>
    </div>
  );
} 

export default NavBar;