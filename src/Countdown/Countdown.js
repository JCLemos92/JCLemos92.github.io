import React from "react";
import './Countdown.css';

function Countdown() {
  return(
    <>
      <p>Countdown is working</p>
          <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
          </span>
          days
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
          </span>
          hours
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
          </span>
          min
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
          </span>
          sec
        </div>
        <div class="py-80"></div>
      </div>
    </>
   
  )
}

export default Countdown;