import React from "react";
import './Heading.css';

function Heading() {
  return(
    <>
      <div class="h-screen flex flex-col align-middle items-center bg-slate-200" style={{height:'100%'}}>
      <div
          class="self-center text-cyan-800 font-bold text-3xl align-middle pt-20">
          1 de Julho 2023
        </div>
      <img 
          src='/assets/Images/Monograma_Aguarela.png' 
          class="self-center align-middle"
          alt="test" 
          width="1000"></img>
        <div
          class="self-center text-cyan-800 font-bold text-2xl align-middle pb-20">
          Site em construção
        </div>
      </div>
    </>
  )
}

export default Heading