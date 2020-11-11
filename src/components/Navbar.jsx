import React, {useState, useEffect} from 'react';
import {Navbar, NavItem, NavbarText, NavLink, NavbarToggler, Collapse} from 'reactstrap';
import logo from '../assets/logo.png'

const NavbarComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

  return(
        <div id='navBarContainer'>
            <Navbar color="dark" expand='sm' id="navbarStyle">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <NavLink className="navLink" href="/championship">Championship Course</NavLink>
               <NavLink className="navLink" href="/par3">Par 3 Course</NavLink>
               <NavLink className="navLink" href="/rates">Rates</NavLink>
               
               </Collapse>
            </Navbar>
        </div>
    )

}

export default NavbarComponent;