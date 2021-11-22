import React from "react";
import { useState } from "react";

function Modal({ closeModal }) {
  // Pass props to to Nav
  return (
    <div className="fixed h-30v w-3/6 left-1/4 z-30 p-44 text-white	bg-black border-blue border-8	">
        <button className="ml-96 text-xl" onClick={() => closeModal(false)}>X</button>
        <div className="title"></div>
          <h1>Something</h1>
        <div className="body"></div>
          <p>Something else</p>
        <div className="footer">
          <button onClick={() => closeModal(false)}></button>
        </div>
   
      </div>
  
  )
} 

export default Modal;