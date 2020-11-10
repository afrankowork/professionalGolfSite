import React, {useState, useEffect} from 'react';
import {Navbar, NavItem, NavbarText, NavLink} from 'reactstrap';

const NavbarComponent = () => {

  return(
        <div>
            <Navbar color="dark" dark expand="md" id="navbarStyle">
               <NavLink className="navLink" href="/championship">Championship Course</NavLink>
               <NavLink className="navLink" href="/par3">Par 3 Course</NavLink>
               <NavLink className="navLink" href="/rates">Rates</NavLink>
               <NavLink className="navLink" href="/teeTimes">Tee Times</NavLink>
               
            </Navbar>
        </div>
    )

}

export default NavbarComponent;