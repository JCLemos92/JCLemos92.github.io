import React from "react";
import Footer from "../Footer/Footer";
import './Presentes.css';

function Presentes() {

  return(
    <>
      <div id = "gifts" class="flex flex-col justify-between h-full">
      <div id="giftText" class="mt-36">
      <div class="sm:mx-44 mx-20 font-light text-2xl text-[#6c8ea7] mb-10 flex">Presentes</div>
        <div class="mx-10 sm:mx-36 flex flex-col lg:flex-col mb-10">
          <div className="justify-text">
            <div id="quadra1" className="mb-4">
              <p>As armas e os barões assinalados,</p>
              <p>Que da ocidental praia Lusitana,</p>
              <p>Por mares nunca de antes navegados,</p>
              <p>Passaram ainda além da Taprobana,</p>
              <p>Em perigos e guerras esforçados,</p>
              <p>Mais do que prometia a força humana,</p>
              <p>E entre gente remota edificaram</p>
              <p>Novo Reino, que tanto sublimaram;</p>
            </div>
            <div id="quadra2" className="mb-4">
              <p>As armas e os barões assinalados,</p>
              <p>Que da ocidental praia Lusitana,</p>
              <p>Por mares nunca de antes navegados,</p>
              <p>Passaram ainda além da Taprobana,</p>
              <p>Em perigos e guerras esforçados,</p>
              <p>Mais do que prometia a força humana,</p>
              <p>E entre gente remota edificaram</p>
              <p>Novo Reino, que tanto sublimaram;</p>
            </div>
          </div>
          <div class="flex justify-center text-[#6c8ea7] text-xl my-10">PT50003503900005547280037</div>
      </div>
        
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default Presentes;