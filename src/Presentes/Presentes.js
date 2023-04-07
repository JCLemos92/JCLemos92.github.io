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
          <div class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius eu ipsum non rutrum. Phasellus eget erat vel turpis aliquam semper dictum in ipsum. Fusce sapien ex, lobortis nec eros non, tincidunt varius neque. Donec luctus augue euismod, blandit risus sit amet, suscipit sem. Donec augue nibh, luctus et nulla vel, egestas tempor est. Suspendisse maximus eleifend ligula. Nam nec leo vel mi auctor ullamcorper id at velit. Maecenas ullamcorper, nibh nec rutrum congue, lacus tellus mollis nulla, id lacinia nibh ex eget velit. Sed diam erat, placerat eget orci et, pellentesque efficitur leo. Nullam et placerat dui.
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