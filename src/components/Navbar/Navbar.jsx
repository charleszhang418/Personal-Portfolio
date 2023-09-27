import React, {useState} from 'react'
import { Nav, Container, NavDropdown } from 'react-bootstrap'
import { MdNightsStay, MdWbSunny } from "react-icons/md";
 
import './Navbar.css'

const Navbar = ({ darkMode, setDarkMode }) => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <div className='container'>
                <div className='link'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#work">Experience</a></li>
                  <li><a href="#projects">Projects</a></li> 
                </ul>
                </div>
                {/* <div onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                    <MdWbSunny className="text-2xl cursor-pointer" />
                    ) : (
                    <MdNightsStay className="text-2xl cursor-pointer" />
                    )}
                </div> */}
            </div>
            
        </div>
        
    )
}
 
export default Navbar