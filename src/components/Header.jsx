import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { MdNightsStay, MdWbSunny } from "react-icons/md";


const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="max-w-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white items-center">
      
      <nav className="p-2 md:flex py-5 px-32 mx-auto">
        <h1 onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer" />
            )}
        </h1>
        
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 justify-between ">
          <li>Home</li>
          <li><a class="hover:text-gray-200" href="#Experience">Experience</a></li>
          <li><a class="hover:text-gray-200" href="#Project">Project</a></li>
          <li><a class="hover:text-gray-200" href="#Education">Education</a></li>
          <li><a class="hover:text-gray-200" href="https://vsco.co/cheesychank/gallery">Gallery</a></li>

          <ul class="object-right">
        </ul>
        
        </ul>
      </nav>
    </header>

  );
};



export default Header;
