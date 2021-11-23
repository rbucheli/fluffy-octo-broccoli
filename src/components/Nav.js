// import { Link } from "react-router-dom";
// import React from 'react';
import { useState } from "react";
import Modal from "./Modal";

function Nav(props) {
  const [openModal, setOpenModal] = useState(false);
  return (
<div className="w-full h-20 bg-gray-800 text-gray-200 flex flex-row justify-between items-center">
      <div className="store-logo text-3xl font-bold px-3">nosferatu</div>
      <ul className="menu-list flex flex-row text-xl font-bold">
        <li className="menu-list-item px-4">
          <a href="/">home</a>
        </li>
        <li className="menu-list-item px-4">
          <a href="/games">games</a>
        </li>
        <li className="menu-list-item px-4">
          <button 
            className=""
            onClick={() => {
              setOpenModal(true)
            }}
          >
           cart 
          </button>
          {openModal && <Modal  shoppingCart={props.shoppingCart}
 closeModal={setOpenModal} />}
        </li>
      </ul>
    </div>
  );
}
export default Nav;