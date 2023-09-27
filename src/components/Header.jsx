import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { MdNightsStay, MdWbSunny } from "react-icons/md";



const Header = ({ darkMode, setDarkMode }) => {
  return (

    <header className="max-w-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center py-5 px-32">
        <h1 className="text-lg">Charles</h1>
        <h1 className="link">Experiences</h1>
        <h1 className="link">Projects</h1>
        <h1 className="link">Education</h1>

        <h1 onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </h1>
      </nav>
    </header>

  );
};



export default Header;
