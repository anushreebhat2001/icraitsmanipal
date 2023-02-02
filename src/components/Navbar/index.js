import React from "react";
import { useMediaQuery } from "react-responsive";
import {
    Nav,
    NavLink,
    NavLogo,
    NavMenu,
} from "./NavbarElements";
import "./navbar.css";
import { SmallNavbar } from "./smallnavbar";
import logo from '../../images/mahelogo.png';


const Navbar = () => {
    const issmallscreen = useMediaQuery ({ query: '(max-width: 768px)' });
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img id='logo' src = {logo} alt="Logo"/>
            </NavLogo>
             {issmallscreen && <SmallNavbar />}

            {!issmallscreen && <NavMenu>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/Committees">
                    Committees
                </NavLink>
                <NavLink to="/CallforPapers">
                    Call for Papers
                </NavLink>
                <NavLink to="/ImportantDates">
                    Important Dates
                </NavLink>
                <NavLink to="/Keynote">
                    Keynote
                </NavLink>
                <NavLink to="/AcceptedPapers">
                    Accepted Papers
                </NavLink>
                <NavLink to="/Registration">
                    Registration
                </NavLink>
                <NavLink to="/Publication">
                    Publications
                </NavLink>
                <NavLink to="/Downloads">
                    Downloads
                </NavLink>
                <NavLink to="/Partners">
                    Partners
                </NavLink>
            </NavMenu> }
           </Nav> 
        </>
    );
};
export default Navbar;