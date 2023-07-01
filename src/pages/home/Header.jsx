import React from "reactn";
import styled from "styled-components";
import self from "../../assets/images/header.JPG";
import react from "../../assets/images/stacks/react.svg";
import node from "../../assets/images/stacks/node.svg";
import rails from "../../assets/images/stacks/rails.svg";
import tailwind from "../../assets/images/stacks/tailwind.svg";
import firebase from "../../assets/images/stacks/firebase.svg";
import next from "../../assets/images/stacks/next.svg";
import html from "../../assets/images/stacks/html.svg";
import css from "../../assets/images/stacks/css.svg";
import cloud from "../../assets/images/stacks/cloud.svg";
import Typical from "react-typical";
import { mediaQuery } from "../../styles/constants";

export const Header = (props) => {
  return (
    <HomeSection id="home" className="home">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h3>Hello, It's me</h3>
              <h1>Sebastian Mendo</h1>
              <h3>and I'm a
                <span>
                  <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                      'Frontend developer',
                      3000,
                      'Backend developer',
                      3000,
                      'Freelancer',
                      2000,
                    ]}
                  />
                </span>
              </h3>
              <p>I'm a passionate developer based in Lima, Peru. 📍</p>
              <div className="socials">
                <a
                  className="icon-linkedin"
                  href="https://www.linkedin.com/in/sebastian-mendo-lopez-8730b1126/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
                <a
                  className="icon-github"
                  href="https://github.com/sebastianmendo1995"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a
                  className="icon-angellist"
                  href="https://angel.co/u/sebastian-mendo-lopez"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-angellist fa-lg"></i>
                </a>
              </div>
            </div>
            <div className="hero-img">
              <img src={self} alt="self" />
            </div>
          </div>
          <div className="skills">
            <p>Tech Stacks</p>
            <div className="logos">
              <ul>
                <li><img src={react} title="HTML5" alt="skill-icon" /></li>
                <li><img src={node} title="CSS3" alt="skill-icon" /></li>
                <li><img src={rails} title="Java Script" alt="skill-icon" /></li>
                <li><img src={tailwind} title="React" alt="skill-icon" /></li>
                <li><img src={firebase} title="Tailwind CSS" alt="skill-icon" /></li>
                <li><img src={next} title="SCSS" alt="skill-icon" /></li>
                <li><img src={cloud} title="SCSS" alt="skill-icon" /></li>
                <li><img src={html} title="SCSS" alt="skill-icon" /></li>
                <li><img src={css} title="SCSS" alt="skill-icon" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
};

const HomeSection = styled.section`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 70px;
  height: 100%;

  ${mediaQuery.afterTablet}{
    height: 100vh;
    max-height: 900px;
    padding: 0;
  }

  .container {
    margin: 0 auto;
    width: 100%;
    padding: 0 1.7rem;

    ${mediaQuery.afterTablet}{
      padding: 0 4rem;
    }

    .content {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 5rem;
      padding: 2rem 0;

      .skills{
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #767676;
        display: flex;
        font-size: 1.7rem;

        p {
          color: #2d2e32;
          font-weight: 600;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          list-style: none;
          justify-content: center;
          align-items: center;

          ${mediaQuery.afterTablet}{
            gap: 2rem;
          }

          li {
            align-items: center;
            cursor: pointer;
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;

            img {
              height: 3rem;
              width: auto
            }
          }
        }
      }

      .hero-main {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        
        ${mediaQuery.afterTablet}{
          display: grid;
          gap: 5rem;
          grid-template-columns: 60% 40%;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          position: relative;

          .socials{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            ${mediaQuery.afterTablet}{
              justify-content: flex-start;
              gap: 2rem;
            }

            a {
              background: transparent;
              font-size: 2rem;
              color: #007E91;
              
              :hover {
                color: #002147;
              }
            }
          }

          h3 {
            color: #002147;
            font-size: 1.2rem;
            font-weight: 700;
            text-align: center;

            span {
              color: #007E91;
              margin-left: 0.5rem;
            }

            :nth-of-type(2){
              margin-bottom: 1rem;
            }

            ${mediaQuery.afterTablet}{
              text-align: left;
              font-size: 2.2rem;
              :nth-of-type(2){
                margin-bottom: 2rem;
              }
            }
          }

          h1 {
            color: #002147;
            font-size: 2rem;
            font-weight: 700;
            line-height: 1.5;
            text-align: center;

            ${mediaQuery.afterTablet}{
              font-size: 3.6rem;
              text-align: left;
            }
          }

          img {
            height: 6rem;
            position: absolute;
            right: 13rem;
            top: 8.7rem;
            width: 6rem;
          }

          p {
            color: #555;
            font-size: 0.8rem;
            font-weight: 500;
            line-height: 1.6;
            text-align: center;

             ${mediaQuery.afterTablet}{
              text-align: left;
              font-size: 1.3rem;
            }
          }

          
        }

        .hero-img {
          height: auto;
          width: 20rem;
          margin-bottom: 2rem;

          ${mediaQuery.afterTablet}{
            max-height: 45vh;
            width: 35vw;
            margin: 0;
          }
          
          img{
            width:100%;
            height: 100%;
            max-width: 500px;
            border-radius: 50%;
            animation: floatImage 4s ease-in-out infinite;
          }
        }
      }
    }
  }

  @keyframes floatImage {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);

      ${mediaQuery.afterTablet}{
        transform: translateY(-2.4rem);
      }
    }
    100% {
      transform: translateY(0);
    }
  }

  
`;
