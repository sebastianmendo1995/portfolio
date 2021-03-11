import React from "reactn";
import styled from "styled-components";
import profile from "../../assets/images/profile.png";
import { mediaQuery } from "../../styles/constants";
import logo from "../../assets/images/logo.png";

export const Header = (props) => {
  return (
    <HeaderSection>
      <div className="content">
        <div className="intro">
          <img className="profile-img" src={logo} alt="" />
          <h2 className="name">Sebastian Mendo</h2>
          <h1 className="career">Software Engineer</h1>
          <a href="#contact" className="btn m30-auto">
            contact
          </a>
          <ul>
            <li className="linkedin">
              <a
                className="icon-linkedin"
                href="https://www.linkedin.com/in/sebastian-mendo-lopez-8730b1126/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </li>
            <li className="github">
              <a
                className="icon-github"
                href="https://github.com/sebastianmendo1995"
                target="_blank"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
            </li>
            <li className="angellist">
              <a
                className="icon-angellist"
                href="https://angel.co/u/sebastian-mendo-lopez"
                target="_blank"
              >
                <i className="fab fa-angellist fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  .content {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
    .intro {
      padding-top: 8%;
      margin: 0 auto;
      width: 260px;

      .profile-img {
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        width: 68px;
        height: 68px;
      }

      .name {
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-weight: 400;
        color: #8b5fe7;
        text-align: center;
      }
      .career {
        font-size: 1.8rem;
        line-height: 2.2rem;
        font-weight: 900;
        color: #ffffff;
        text-align: center;
      }

      ul {
        margin-top: 0;
        margin-bottom: 1em;
        list-style: none;
        padding-top: 0.6rem;
        li {
          float: left;
          margin-right: 30px;
          a {
            color: #fff;
            display: table;
            font-size: 2rem;
            height: 40px;
            text-align: center;
            transition: all 0.2s ease-out;
            vertical-align: middle;
            width: 40px;
          }
          a:hover {
            color: #73d8c6;
          }
        }
      }
    }
  }
`;
