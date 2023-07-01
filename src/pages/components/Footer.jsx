import React from "reactn";
import styled from "styled-components";

export const Footer = (props) => {
  return (
    <FooterContainer>
      <div className="content-footer">
        <div className="text">
          Sebastian Mendo Lopez
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  background: #f9f9f9;

  .content-footer {
    border-top: 2px solid #004E77;
    padding: 30px 15px;
    .text {
      text-align: center;
      color: #002147;
    }
  }
`;
