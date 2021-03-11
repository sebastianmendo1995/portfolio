import React from "reactn";
import styled from "styled-components";
import profile from "../../assets/images/profile.png";
import logo from "../../assets/images/logo.png";
import { mediaQuery } from "../../styles/constants";
import { About } from "./About";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";

export const Home = (props) => {
  return (
    <HomeContainer>
      <Header />
      <About />
      <Portfolio />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  background: #273047;

  .btn {
    background-image: linear-gradient(
      to right,
      #73d8c6 0%,
      #5ba4d7 50%,
      #5ba4d7 100%
    );
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    border-radius: 50px;
    display: block;
    color: #ffffff;
    font-size: 1.1rem !important;
    font-weight: 900 !important;
    font-family: "roboto";
    cursor: pointer;
    border: 0;
    outline: none;
  }

  .m30-auto {
    margin: 30px auto;
  }

  .w250 {
    width: 250px;
  }
`;
