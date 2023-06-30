import React from "reactn";
import styled from "styled-components";
import { About } from "./About";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { mediaQuery } from "../../styles/constants";
import {Navbar} from './nav.jsx';

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
`;
