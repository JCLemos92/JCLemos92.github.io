import React from "react";
import Footer from "../Footer/Footer";
import './Location.css';

function Location() {
  return(
    <>
      <div class="flex flex-col justify-between h-full">
      <div id = "location">
      <div class="mt-36"></div>
      <div class="sm:mx-44 mx-20 font-light text-2xl text-[#6c8ea7] mb-10">Onde</div>
      <div class="mx-10 sm:mx-36 flex flex-col lg:flex-row">
        <div class="text-justify">
        <p class="mb-4">A cerimónia terá lugar no mosteiro de Bustelo, em Penafiel, às 15 horas. A Mariana promete não se atrasar... muito! </p>
        <p>Continuamos a festa na Quinta de Segade, onde esperamos poder brindar juntos ao início desta nova etapa da nossa vida.</p>
        </div>
      </div>
      <div class="mx-10 sm:mx-36 flex flex-col lg:flex-row mb-10 justify-between">
        <img 
          src='/assets/Images/mosteiro.png' 
          class="self-center align-middle ml-10 sm:mb-10 h-[270px]"
          alt="test" 
          ></img>
        <img 
          src='/assets/Images/segade.png' 
          class="self-center align-middle mr-10 sm:mb-10 h-[290px]"
          alt="test" 
          ></img>
      </div>
      <div class="mx-10 sm:mx-36"><iframe title="test" class="w-full" height="300" src="https://maps.google.com/maps?width=800&amp;height=440&amp;hl=en&amp;q=Mosteiro%20do%20Bustelo+(Mosteiro%20do%20Bustelo)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Location;