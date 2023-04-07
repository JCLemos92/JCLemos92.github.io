import React from "react";
import './Location.css';

function Location() {
  return(
    <>
      <div id = "location">
      <div
          class="font-light text-5xl self-center pb-10 text-[#6c8ea7]">
          Mariana & João
        </div>
        <div
          class="self-center text-4xl align-middle pb-10 text-[#6c8ea7] font-light">
          1 de Julho 2023
        </div>
      <div class="mt-36"></div>
      <div class="mx-44 font-light text-2xl text-[#6c8ea7] mb-10">Onde</div>
      <div class="mx-10 sm:mx-36 flex flex-col lg:flex-row mb-10">
        <div class="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eu ipsum non rutrum. Phasellus eget erat vel turpis aliquam semper dictum in ipsum. Fusce sapien ex, lobortis nec eros non, tincidunt varius neque. Donec luctus augue euismod, blandit risus sit amet, suscipit sem. Donec augue nibh, luctus et nulla vel, egestas tempor est. Suspendisse maximus eleifend ligula. Nam nec leo vel mi auctor ullamcorper id at velit. Maecenas ullamcorper, nibh nec rutrum congue, lacus tellus mollis nulla, id lacinia nibh ex eget velit. Sed diam erat, placerat eget orci et, pellentesque efficitur leo. Nullam et placerat dui.
        </div>
        <img 
          src='/assets/Images/mosteiro.png' 
          class="self-center align-middle ml-10 sm:mb-10"
          alt="test" 
          width="500"></img>
      </div>
      <div class="mx-10 sm:mx-36 flex flex-col-reverse lg:flex-row mb-10">
        <img 
          src='/assets/Images/segade.png' 
          class="self-center align-middle mr-10 sm:mb-10"
          alt="test" 
          width="500"></img>
        <div class="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eu ipsum non rutrum. Phasellus eget erat vel turpis aliquam semper dictum in ipsum. Fusce sapien ex, lobortis nec eros non, tincidunt varius neque. Donec luctus augue euismod, blandit risus sit amet, suscipit sem. Donec augue nibh, luctus et nulla vel, egestas tempor est. Suspendisse maximus eleifend ligula. Nam nec leo vel mi auctor ullamcorper id at velit. Maecenas ullamcorper, nibh nec rutrum congue, lacus tellus mollis nulla, id lacinia nibh ex eget velit. Sed diam erat, placerat eget orci et, pellentesque efficitur leo. Nullam et placerat dui.
        </div>
      </div>
      <div class="mx-10 sm:mx-36"><iframe title="test" class="w-full" height="300" src="https://maps.google.com/maps?width=800&amp;height=440&amp;hl=en&amp;q=Mosteiro%20do%20Bustelo+(Mosteiro%20do%20Bustelo)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      </div>
      
    </>
  )
}

export default Location;