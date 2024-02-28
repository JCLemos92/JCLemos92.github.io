import React from "react";
import './Navigation.css'
import { useState, useEffect } from "react";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [ onTop, setonTop ] = useState(false);
  const [burguerMoved, setBurgerMoved] = useState(false);
  const LANDING = '/';
  
  useEffect(() => {
    if(window.location.pathname === LANDING) {
      setonTop(true);
      setBurgerMoved(false)
    } else {
      setonTop(false);
      setBurgerMoved(true)
    }
  }, [])

  return (
    <div class="fixed w-full float-right top-0">
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
              <li class="border-b border-white-400 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer	">
                <a
                href={`/`}
                >
                Início
                </a>
              </li>
              <li class="border-b border-white-400 my-3 mt-6 uppercase w-fit mx-10 text-white text-lg font-medium	hover:cursor-pointer">
                <a href={`/aboutUs`}
                  >
                  Sobre Nós
                </a>
              </li>
              <li class="border-b border-white-400 my-3 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer">
                <a href={`/location`}
                >
                Onde
              </a>
              </li>
              <li class="border-b border-white-400 my-3 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer">
                <a href={`/gifts`}
                >
                Presentes
              </a>
              </li>
              <li class="border-b border-white-400 my-3 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer">
              <a href={`/confirmation`}>
                Confirmações
              </a>
              </li>
              <li class="border-b border-white-400 my-3 uppercase w-fit mx-10 text-white text-lg font-medium hover:cursor-pointer">
              <a href={`/contact`} >
                Contacto
              </a>
          </li>
            </ul>
          </div>
        </section>

        <ul class={onTop ? 
        "DESKTOP-MENU hidden lg:flex top-0 z-50 py-4 float-right px-20 w-full shadow-sm flex-row-reverse text-white bg-slate-500 bg-opacity-30 font-semibold	" :
        "DESKTOP-MENU hidden lg:flex top-0 z-50 py-4 float-right px-20 bg-[#6c8ea7] w-full shadow-sm flex-row-reverse text-white"
        }>
        <li class="mx-10 hover:cursor-pointer">
            <a
            href={`/contact`}
            >
            Contacto
          </a>
          </li>
          <li class="mx-10 hover:cursor-pointer">
              <a href={`/confirmation`} >
                Confirmações
            </a>
          </li>
          <li class="mx-10 hover:cursor-pointer">
            <a href={`/gifts`}
            >
            Presentes
          </a>
          </li>
          <li class="mx-10 hover:cursor-pointer">
            <a href={`/location`}
              >
              Onde
            </a>
          </li>
          <li class="mx-10 hover:cursor-pointer">
            <a href={`/aboutUs`}
              >
              Sobre Nós
            </a>
          </li>
          <li class="mx-10 hover:cursor-pointer">
            <a href={`/`}
              >
              Início
            </a>
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
      }
    `}</style>
    </div>
  );
} 

export default Navigation;