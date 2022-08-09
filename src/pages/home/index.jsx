import React from "reactn";
import styled from "styled-components";
import { About } from "./About";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { mediaQuery } from "../../styles/constants";

export const Home = (props) => {
  return (
    <HomeContainer>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  background: #1d1d1d;
  position: relative;

  ::before {
    content: "<body>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;

    ${mediaQuery.afterTablet} {
      margin-left: 2rem;
    }
  }

  ::after {
    content: "</body>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    bottom: -5rem;

    ${mediaQuery.afterTablet} {
      margin-left: 2rem;
    }
  }

  .flat-button {
    color: #08fdd8;
    font-size: 14px;
    letter-spacing: 4px;
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
    margin-top: 20px;
    position: relative;
    width: 100%;
    max-width: 220px;
    height: 50px;
    line-height: 50px;
    display: block;
    text-align: center;
    cursor: pointer;

    div {
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .bg {
      left: -5%;
      position: absolute;
      background: #08fdd8;
      width: 0;
      height: 100%;
      z-index: 3;
      -webkit-transition: 0.3s ease-out all;
      -o-transition: 0.3s ease-out all;
      transition: 0.3s ease-out all;
      -webkit-transform: skewX(-10deg);
      -ms-transform: skewX(-10deg);
      transform: skewX(-10deg);
    }

    .base {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 1px solid #08fdd8;
    }

    span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    span.text:after {
      content: "";
      width: 4px;
      height: 4px;
      right: 0;
      bottom: 0;
      background: #08fdd8;
      position: absolute;
      -webkit-transition: 0.3s ease-out all;
      -o-transition: 0.3s ease-out all;
      transition: 0.3s ease-out all;
      z-index: 5;
    }
  }

  h1:before {
    content: "<h1>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    margin-top: -3rem;
    left: -1rem;
  }

  h1:after {
    content: "<h1/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    left: -1rem;
    bottom: -3rem;
  }

  h3 {
    position: relative;
    font-family: "Anton";
    color: #08fdd8;
    font-weight: 400;
    font-size: 4.3rem;
    line-height: 3.7rem;
    color: #08fdd8;
    margin-bottom: 3rem;
  }

  h3:before {
    content: "<h2>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    margin-top: -3rem;
    left: -1rem;
  }

  h3:after {
    content: "<h2/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    left: -1rem;
    bottom: -3rem;
  }

  p:first-of-type:before {
    content: "<p>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    margin-top: -1rem;
    left: -1rem;
  }

  p:last-of-type:after {
    content: "<p/>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    left: -1rem;
    bottom: -2rem;
  }

  form:before {
    content: "<form>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    bottom: 100%;
    left: -1rem;
  }

  form:after {
    display: block !important;
    content: "</form>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    top: 100%;
    left: -1rem;
  }
`;
