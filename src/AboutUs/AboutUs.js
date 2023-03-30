import React from "react";
import './AboutUs.css'

function AboutUs() {
  return(
    <>
      <div id = "aboutUs">
        <div class="mt-36"></div>
        <div class="mx-36 flex flex-col lg:flex-row">
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
    </>
  )
}

export default AboutUs;