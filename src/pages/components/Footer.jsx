import React from "reactn";
import styled from "styled-components";

export const Footer = (props) => {
  return (
    <FooterContainer>
      <div className="content-footer">
        <div className="text">Sebastian Mendo Lopez</div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  padding-top: 100px;
  background: #1d1d1d;

  .content-footer {
    border-top: 2px solid #08fdd8;
    padding: 30px 15px;
    .text {
      text-align: center;
      color: #ffffff;
    }
  }
`;
