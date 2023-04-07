import React from "react";
import Footer from "../Footer/Footer";
import './AboutUs.css'

function AboutUs() {
  return(
    <>
      <div id = "aboutUs">
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
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;