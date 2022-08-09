import React from "reactn";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { mediaQuery } from "../../styles/constants";

export const Header = (props) => {
  return (
    <HeaderSection>
      <div className="content">
        <div className="intro">
          <h1 className="name">Sebastian Mendo</h1>
          <p className="career">Software Engineer</p>
          <div className="contact">
            <a href="#contact" className="flat-button">
              <div>
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text">Contact me!</span>
              </div>
            </a>

            <ul>
              <li className="linkedin">
                <a
                  className="icon-linkedin"
                  href="https://www.linkedin.com/in/sebastian-mendo-lopez-8730b1126/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </li>
              <li className="github">
                <a
                  className="icon-github"
                  href="https://github.com/sebastianmendo1995"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </li>
              <li className="angellist">
                <a
                  className="icon-angellist"
                  href="https://angel.co/u/sebastian-mendo-lopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-angellist fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderSection>
  );
};

const HeaderSection = styled.section`
  .flat-button {
    margin: 0 !important;
  }

  .content {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;

    .intro {
      padding-top: 5rem;
      margin: 0 auto;
      width: 100%;

      img {
        display: block;
        border-radius: 50%;
        width: 68px;
        height: 68px;
        margin-bottom: 4rem;
      }

      .name {
        color: #fff;
        margin: 0;
        font-family: "Anton";
        font-weight: 400;
        font-size: 3.8rem;
        line-height: 4.5rem;
        position: relative;
        word-wrap: break-word;
      }
      .career {
        font-size: 1.6rem;
        letter-spacing: 4px;
        margin: 3rem 0;
        display: block;
        color: #8d8d8d;
        position: relative;
      }

      .contact {

        display: flex;
        flex-direction: column;
        gap: 1rem;

        ${mediaQuery.afterTablet}{
          flex-direction: row;
          align-items: center;
        }
      }

      ul {
        list-style: none;
        margin: 0 !important;
        padding: 0 !important;
import { mediaQuery } from '../../styles/constants/mediaQuery';

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
