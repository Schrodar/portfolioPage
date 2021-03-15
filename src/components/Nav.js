import React from 'react';
import { StyledNav, } from "../styles";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion }  from 'framer-motion';
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Moa Larsson
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
          <StyledActiveNav layout
            transition={{ duration: 0.75 }}
            initial={{ width: "30%" }}
            animate={{ width: pathname === "/" ? "30%" : "0%",
              opacity: pathname === "/" ? "1" : "0"  }}
          />
        </li>
                <li>
                    <Link to="/work">Portfolio</Link>
                    <StyledActiveNav layout
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "30%" : "0%",
            opacity: pathname === "/work" ? "1" : "0"  }}
          />
                </li>
                <li>
                    <Link  to="/contact">Contact</Link>
                    <StyledActiveNav layout
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "30%" : "0%",
            opacity: pathname === "/contact" ? "1" : "0" }}
          />
                </li>
            </ul>
        </StyledNav>
    )
};


const StyledActiveNav = styled(motion.div)`
height: 0.2rem;
background: #726d67;
width: 30%;
position: absolute;
bottom: -70%;
@media (max-width: 1300px) {
  left: 0%;
}
`;


export default Nav;