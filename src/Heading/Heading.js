import React from "react";
import './Heading.css';

function Heading() {
  return(
    <>
      <div class="flex flex-col align-middle items-center">
 
      <img 
          src='/assets/Images/Monograma_Aguarela.png' 
          class="self-center align-middle mt-16"
          alt="test" 
          width="700"></img>
        <div
          class="self-center font-light text-5xl align-middle pb-10 text-[#6c8ea7]">
          Mariana & João
        </div>
        <div
          class="self-center text-4xl align-middle pb-10 text-[#6c8ea7] font-light">
          1 de Julho 2023
        </div>
      </div>
    </>
  )
}

export default Heading