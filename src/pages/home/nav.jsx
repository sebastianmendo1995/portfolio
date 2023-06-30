import styled from "styled-components";

export const Navbar = (props) => {

  return(
    <NavContainer>
      <h3 className="logo" href="#home">Mendo.dev</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><i className="fa-solid fa-bars-staggered mobile-menu"></i></li>
      </ul>
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
  padding: 25px 40px 25px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  color: #002147;

  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .logo {
    color: #2d2e32;
    cursor: pointer;
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
  
`