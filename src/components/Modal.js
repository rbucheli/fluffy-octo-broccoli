import React from "react";
import { useState } from "react";
import "../App.css";

function Modal({ closeModal, shoppingCart }) {
  // Pass props to to Nav
  console.log(shoppingCart)
  return (
    <div>
      <div className="fixed h-30v w-3/6 left-1/4 z-30 p-44 text-white	bg-black border-blue border-8	">
        <button className="modalBttn text-xl" onClick={() => closeModal(false)}>
          X
        </button>
        <h1 className="modalTitle">Title: </h1>
        <p className="modalQty">Qty: 1</p>
        <p className="modalPrice"></p>
        <button className="checkOutBttn">Checkout</button>
      </div>
    </div>
  );
}

export default Modal;