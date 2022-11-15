import {React, useState} from "react";
import { FaBars } from 'react-icons/fa';
import Modal from "./Modal"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src={require("../assets/Group-1.png")} alt="logo" className="w-48"/>
            </a>
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars className="text-black"/>
            </button>
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-36 lg:mt-4">
              <li className="lg:mr-10">
                <a
                  className="px-3 py-2 flex items-center text-base leading-snug font-Red hover:opacity-75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="lg:mr-10">
                <a
                  className="px-3 py-2 flex items-center text-base leading-snug font-Red hover:opacity-75"
                  href="/placestostay"
                  rel="noreferrer" 
                >
                  Place to stay
                </a>
              </li>
              <li className="lg:mr-10">
                <a
                  className="px-3 py-2 flex items-center text-base  leading-snug  hover:opacity-75 font-Red"
                  href="#nfts"
                >
                  NFTs
                </a>
              </li>
              <li className="lg:mr-48">
                <a
                  className="px-3 py-2 flex items-center text-base leading-snug hover:opacity-75 font-Red"
                  href="#community"
                >
                  Community
                </a>
              </li>
                <Modal />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

