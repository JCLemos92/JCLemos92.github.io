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
          <p>Apesar de ser um lugar-comum, a vossa presença é mesmo o melhor presente que nos podem oferecer!</p>
          <p className="mb-4">Várias pessoas nos têm perguntado se temos alguma lista de casamento, mas a verdade é que não: temos a (enorme!) sorte de estar a morar numa casa onde já temos tudo aquilo que precisamos.</p>
          <p>Neste momento o nosso principal desejo é começarmos a nossa família, por isso se nos quiserem dar uma ajuda, deixamos aqui o nosso IBAN 🙂</p>
          Muito obrigada!
          <div class="flex justify-center text-[#6c8ea7] text-xl my-10">PT50003503900005547280037</div>        
        </div>
      </div>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Presentes;