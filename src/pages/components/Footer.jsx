import React from "reactn";
import styled from "styled-components";

export const Footer = (props) => {
  return (
    <FooterContainer>
      <div className="content-footer">
        <div className="text">Sebastian Mendo Lopez, Full-stack Software Engineer</div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  padding-top: 100px;
  background: #273047;

  .content-footer {
    border-top: 2px solid #323c55;
    padding: 30px 15px;
    .text {
      text-align: center;
      color: #ffffff;
    }
  }
`;
