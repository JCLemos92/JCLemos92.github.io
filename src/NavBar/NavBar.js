import React from "react";
import './NavBar.css'
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [ onTop, setonTop ] = useState(false);
  const [burguerMoved, setBurgerMoved] = useState(false);

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
            <ul class="MENU-LINK-MOBILE-OPEN flex flex-col mt-14 ml-5 mr-5">
              <li class="border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium">
                <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Início
                </Link>
              </li>
              <li class="border-b border-white-400 my-3 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium	">
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  About Us
                </Link>
              </li>
              <li class="border-b border-white-400 my-3 uppercase w-fit mx-10 text-white text-lg font-medium">
                <Link
                to="location"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Location
              </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul class={onTop ? 
        "DESKTOP-MENU hidden lg:flex top-0 z-50 py-8 float-right px-20 w-full shadow-sm flex-row-reverse text-white" :
        "DESKTOP-MENU hidden lg:flex top-0 z-50 py-8 float-right px-20 bg-white w-full shadow-sm flex-row-reverse"
        }>
          <li class="ml-10">
            <Link
              to="location"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Location
            </Link>
          </li>
          <li class="mx-10">
            <Link
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              About Us
            </Link>
          </li>
          <li class="mx-10">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
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
        background-color: #6c8ea7;
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