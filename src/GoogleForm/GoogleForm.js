import React from "react";
import Footer from "../Footer/Footer";
import './GoogleForm.css';


function GoogleForm() {
  return(
    <div id="contact">
    <div class="mt-36"></div>
      <div class="mx-44 font-light text-2xl text-[#6c8ea7] mb-10 flex justify-center">Contacto</div>
    <div class="sm:mx-52 flex flex-col mx-32">
      <form 
      method="POST"  action="https://docs.google.com/forms/d/1dWcvUgxCl9XbIM4jViwJAGtPqHHlF6Netp7-XpARHzw/formResponse"
    >

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Nome
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nome" name="entry.1817107875" />
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="entry.390625165" />
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Mensagem
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-52" placeholder="Mensagem" name="entry.677909156" />
    </div>

      <button class="bg-[#6c8ea7] hover:bg-[#467a9f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Enviar
      </button>
    </form>
    </div>

    <div class="w-full flex justify-center mt-20">
        <img 
            src='/assets/Images/Monograma_Aguarela.png' 
            class="flex justify-center"
            alt="test" 
            width="300"></img>
      </div>


      <div class="flex flex-row lg:flex-row space-x-10 w-full">
      
        <div class="w-[50%] block">
          <div class="mx-10 sm:mx-36 flex justify-center text-[#6c8ea7] text-xl mb-5">
            Mariana Pissarra
          </div>
          <div class="mx-10 sm:mx-36 flex justify-center mb-5">
            912299560
          </div>
        </div>
        <div class="w-[50%]">
          <div class="mx-10 sm:mx-36 flex justify-center text-[#6c8ea7] text-xl mb-5">
            João Lemos
          </div>
          <div class="mx-10 sm:mx-36 flex justify-center mb-5">
            915544540
          </div>
        </div>
        </div>
        <div class="mx-10 sm:mx-36 flex justify-center mb-10">
            casamento@marianaejoao.pt
          </div>

        <Footer />
    </div>
  )
}

export default GoogleForm;