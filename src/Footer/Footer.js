import React from "react";
import './Footer.css';

function Footer() {
  return(
    <>
      {/* <div id = "aboutUs">
        <div class="mt-24"></div>
        <div clas="flex justify-center">
          <div
            class="font-light text-5xl self-center pb-10 text-[#6c8ea7] flex justify-center">
            Mariana & João
          </div>
          <div
            class="self-center text-4xl align-middle pb-10 text-[#6c8ea7] font-light flex justify-center mb-24">
            1 de Julho 2023
          </div>
        </div>
        
        <div class="mx-10 sm:mx-36 flex flex-col lg:flex-row">
          <img 
            src='/assets/Images/IMG_6945.JPG' 
            class="self-center align-middle mr-10 sm:mb-10"
            alt="test" 
            width="300"></img>
          <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eu ipsum non rutrum. Phasellus eget erat vel turpis aliquam semper dictum in ipsum. Fusce sapien ex, lobortis nec eros non, tincidunt varius neque. Donec luctus augue euismod, blandit risus sit amet, suscipit sem. Donec augue nibh, luctus et nulla vel, egestas tempor est. Suspendisse maximus eleifend ligula. Nam nec leo vel mi auctor ullamcorper id at velit. Maecenas ullamcorper, nibh nec rutrum congue, lacus tellus mollis nulla, id lacinia nibh ex eget velit. Sed diam erat, placerat eget orci et, pellentesque efficitur leo. Nullam et placerat dui.
          </div>
        </div>
      </div> */}

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

      <div class="w-full bg-[#6c8ea7] mt-10 text-white py-3">
        <div class="flex justify-center">
          @ 2023 marianaejoao.pt. Made with React & tailwindcss
        </div>
      </div>
    </>
  )
}

export default Footer;