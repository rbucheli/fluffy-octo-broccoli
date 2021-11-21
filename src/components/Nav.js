// import { Link } from "react-router-dom";
// import React from 'react';

import { Link } from "react-router-dom";

function Nav() {
  return (
<div className="w-full h-20 bg-gray-800 text-gray-200 flex flex-row justify-between items-center">
      <div className="store-logo text-3xl font-bold px-2">nosferatu</div>
      <ul className="menu-list flex flex-row text-xl font-bold">
        <li className="menu-list-item px-2">
          <a href="/">home</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="/games">games</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="/cart">cart</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
  //   <div className="flex items-center flex-shrink-0 text-white mr-6">
  //   <Link to="/" className="text-white no-underline hover:text-white hover:no-underline">
  //     <span class="text-2xl pl-2">Cache</span>
  //   </Link>
  // </div>
  // <div className="block lg:hidden">
  //   <button className="flex items-center px-3 py-2 border round text-gray-500 border-gray-600 hover:text-white hover:borde-white">
  //     <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  //   </button>
  // </div>
  // <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0">
  //   <ul className="list-rest lg:flex justify-end flex-1 items-center"
  //   >
  //     <li className="mr-3">
  //       <a className="inline-block py-2 px-4 text-white no-underline" href="/games">
  //       </a>
  //     </li>
      
  //   </ul>
  // </div>