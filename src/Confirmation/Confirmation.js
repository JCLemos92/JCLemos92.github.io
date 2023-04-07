import React from "react";
import Footer from "../Footer/Footer";
import './Confirmation.css';

function Confirmation() {

  return(
    <>
      <div id = "gifts" class="flex flex-col justify-between h-full">
      <div id="giftText" class="mt-36">
      <div class="sm:mx-44 mx-20 font-light text-2xl text-[#6c8ea7] mb-10 flex">Confirmações</div>
        <div class="mx-10 sm:mx-36 flex flex-col lg:flex-col mb-10">
          <div class="text-justify">
          Pedimos que confirmem a vossa presença até ao dia 1 de Junho de 2023. Podem fazê-lo através dos contactos disponibilizados no convite ou através do e-mail:
          </div>
          <a href="mailto:'casamento@marianaejoao.pt'" class="flex justify-center text-[#6c8ea7] text-xl my-10">casamento@marianaejoao.pt</a>
      </div>
        
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default Confirmation;