import React from "reactn";
import styled from "styled-components";
import { Footer } from "./Footer";

export const Layout = (props) => {
  return (
    <LayoutContainer>
      <div className="main-container">
        <div className="layout-content">{props.children}</div>
        <Footer />
      </div>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  .main-container{
    width: 100%;
  }
`;
