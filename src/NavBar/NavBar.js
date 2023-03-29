import React from "react";
import './NavBar.css'
import { useState } from "react";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ToggleMode = () => {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div class="fixed w-full float-right">
      <nav class="w-full float-right">
        <section class="MOBILE-MENU flex lg:hidden justify-between top-0 z-50 px-8 py-8 right-0 float-right">
          <div
            class="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span class="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div class={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              class="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                class="h-8 w-8 text-gray-600"
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
              <li class="border-b border-gray-400 my-3 mt-6 uppercase w-fit mx-10">
                <a href="/about">About</a>
              </li>
              <li class="border-b border-gray-400 my-3 uppercase w-fit mx-10">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li class="border-b border-gray-400 my-3 uppercase w-fit mx-10">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul class="DESKTOP-MENU hidden lg:flex top-0 z-50 py-8 float-right px-20 bg-white w-full shadow-sm flex-row-reverse">
          <li>
            <a href="/about" class="mx-10">About</a>
          </li>
          <li>
            <a href="/portfolio" class="mx-10">Portfolio</a>
          </li>
          <li>
            <a href="/contact" class="mx-10">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: fit-content;
        background-color: #6c8ea7;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
      }
    `}</style>
    </div>
  );
} 

export default NavBar;