import React from "reactn";
import styled from "styled-components";
import { About } from "./About";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Navbar } from './nav.jsx';
import { mediaQuery } from "../../styles/constants";

export const Home = (props) => {
  return (
    <HomeContainer>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;

  .submit {
    align-items: center;
    background-image: linear-gradient(135deg, #007E91 40%, #002147);
    border: 0;
    border-radius: 10px;
    box-sizing: border - box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 700;
    height: 54px;
    justify-content: center;
    letter-spacing: .4px;
    line-height: 1;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :active {
      outline: 0;
    }

    :hover {
      outline: 0;
    }

    span {
      transition: all 200ms;
    }

    :hover span {
      transform: scale(.9);
      opacity: .75;
    }
  }

  ${mediaQuery.afterTablet} {
    .submit {
      font-size: 15px;
      height: 50px;
    }

    .submit span {
      line-height: 50px;
    }
  }
`;
