import React, { useState } from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";

export const Navbar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <NavContainer>
      <h3 className="logo" href="#home">Mendo.dev</h3>
      <div className="desktop">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="mobile">
        <ul className={`nav-menu no-scrollbar ${active ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => {
              setActive(!active);
            }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => {
              setActive(!active);
            }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => {
              setActive(!active);
            }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact"  onClick={(e) => {
              setActive(!active);
            }}>
              Contact
            </a>
          </li>
        </ul>

        <div className={`hamburger ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .09);
  display: flex;
  height: auto;
  justify-content: space-between;
  left: 0;
  padding: 0 40px;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 70px;
  z-index: 200;
  color: #002147;

  ${mediaQuery.afterTablet}{
    padding: 0 30px;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin: 0 !important;
  }

  .logo {
    color: #2d2e32;
    cursor: pointer;
  }

  .desktop{
    display: none;
    
    ${mediaQuery.afterTablet}{
      display: block;
    }

    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      li {
        a {
          font-size: 1.17em;
          color: #2d2e32;
          font-weight: 600;
          text-decoration: none;
          transition: all .23s;
          :hover{
            color: #007E91;
          }
        }
      }
    }
  }

  .mobile{
    display: block;
    
    ${mediaQuery.afterTablet}{
      display: none;
    }

    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: #002147;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .nav-menu {
      position: fixed;
      z-index: 999;
      left: -100%;
      top: 70px;
      height: calc(100vh - 70px);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-color: #fff;
      width: 100%;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
      overflow: auto;
      
      
      li {
        a {
          font-size: 1.17em;
          color: #2d2e32;
          font-weight: 600;
          text-decoration: none;
          transition: all .23s;
          :hover{
            color: #007E91;
          }
        }
      }
    }

    .nav-menu.active {
      left: 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }
  }

  
`