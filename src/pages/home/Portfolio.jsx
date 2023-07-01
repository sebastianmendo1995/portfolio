import React from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";
import spacesImg from "../../assets/images/spaces.png";
import basketballImg from "../../assets/images/basketball.png";
import casinoImg from "../../assets/images/chimp-casino.png";
import foodImg from "../../assets/images/food-app.png";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";

export const Portfolio = (props) => {
  return (
    <PortfolioSection id="projects">
      <div className="content">
        <h3>Portfolio</h3>
        <div className="projects-grid">

          <div className="pro pro__1 ">
            <div className="pro__img">
              <a target="_blank" href="" rel="noreferrer">
                <img src={spacesImg} alt="website" />
              </a>
            </div>
            <div className="pro__text">
              <h2>Spaces</h2>
              <p>Spaces rental website is an online platform that allows users to rent spaces for personal or business use. The website provides an interface for searching, comparing, and reserving places.</p>
              <div className="stack">
                <p>React</p>
                <p>Rails</p>
                <p>MongoDB</p>
                <p>PostgresSQL</p>
              </div>
              <div className="links">
                <a target="_blank" href="" rel="noreferrer">
                  Code <GithubOutlined />
                </a>
                <a target="_blank" href="https://github.com/sebastianmendo1995/fullstack" rel="noreferrer">
                  Live Demo<LinkOutlined />
                </a>
              </div>
            </div>
          </div>

          <div className="pro pro__1 reversed-proj">
            <div className="pro__img">
              <a target="_blank" href="" rel="noreferrer">
                <img src={basketballImg} alt="website" />
              </a>
            </div>
            <div className="pro__text">
              <h2>Basketball Runner</h2>
              <p>
                With a focus on simplicity and focus on user experience while gaming. This project allows user to keep track of their high score and compare it to the highest scores of other players.
              </p>
              <div className="stack">
                <p>Javascript</p>
                <p>Webpack</p>
                <p>Canvas</p>
              </div>
              <div className="links">
                <a target="_blank" href="" rel="noreferrer">
                  Code <GithubOutlined />
                </a>
                <a target="_blank" href="https://github.com/sebastianmendo1995/Basketball-Runner" rel="noreferrer">
                  Live Demo<LinkOutlined />
                </a>
              </div>
            </div>
          </div>

          <div className="pro pro__1">
            <div className="pro__img">
              <a target="_blank" href="" rel="noreferrer">
                <img src={casinoImg} alt="website" />
              </a>
            </div>
            <div className="pro__text">
              <h2>Chimp Casino</h2>
              <p>
                Chimp casino is a casino game that allows users to play different casino games and interact with other users.
              </p>
              <div className="stack">
                <p>React</p>
                <p>MongoDB</p>
                <p>Express</p>
                <p>Node.js</p>
              </div>
              <div className="links">
                <a target="_blank" href="" rel="noreferrer">
                  Code <GithubOutlined />
                </a>
                <a target="_blank" href="https://github.com/sebastianmendo1995/fullstack" rel="noreferrer">
                  Live Demo<LinkOutlined />
                </a>
              </div>
            </div>
          </div>

          <div className="pro pro__1 reversed-proj">
            <div className="pro__img">
              <a target="_blank" href="" rel="noreferrer">
                <img src={foodImg} alt="website" />
              </a>
            </div>
            <div className="pro__text">
              <h2>Food Recipe</h2>
              <p>
                Integrated API to get all recipes for the different dishes.
                Implement shopping car for ingredients.
              </p>
              <div className="stack">
                <p>Vanilla Javascript</p>
                <p>Webpack</p>
                <p>CSS</p>
              </div>
              <div className="links">
                <a target="_blank" href="" rel="noreferrer">
                  Code <GithubOutlined />
                </a>
                <a target="_blank" href="https://github.com/sebastianmendo1995/fullstack" rel="noreferrer">
                  Live Demo<LinkOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled.section`
  width: 100%;
  padding: 3rem 0;
  background-color: #f9f9f9;

  .content {
    margin: 0 auto;
    padding: 0 15px;

    ${mediaQuery.afterTablet}{
      max-width: 1500px;
      margin: 0 auto;
    }

    h3{
      display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      color: #007E91;
      font-size: 1.7rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      text-align: center;
    }

    .projects-grid {
      grid-gap: 5rem;
      display: grid;
      gap: 5rem;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      height: auto;
      max-width: 990px;
      margin: 0 auto;

      .pro {
        background-color: #fff;
        border-radius: 1.7rem;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
      }

      .pro__1 {
        padding: 2rem;
        display: flex;
        flex-direction: column !important;
        gap: 3rem;
        margin: 0 auto;
        
        ${mediaQuery.afterTablet}{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          height: 400px;
          padding: 2rem;
        }
      }

      .reversed-proj {
        grid-auto-flow: dense !important;
        direction: rtl;
      }

      .pro__img {
        background-color: hsla(0,0%,46%,.2);
        border-radius: 1.7rem;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        height: auto;
        overflow: hidden;
        width: 100%;

        img {
          height: auto;
          width: 100%;

          ${mediaQuery.afterTablet}{
            width: 100%;
            height: 100%;
          }
        }
      }

      .pro__text {
        .stack {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
          flex-wrap: wrap;

          p {
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0,0,0,.1);
            color: #000!important;
            font-weight: 600!important;
            padding: 1rem 1.3rem;
            margin-bottom: 0 !important;
          }
        }

        .links {
          display: flex;
          gap: 1rem;
          justify-content: space-evenly;
          margin-top: 3rem;

          a {
            color: #2d2e32;
            font-size: 1.3rem;
            font-weight: 500;
            gap: 5px;
            text-decoration: none;
          }
        }

        h2 {
          color: #002147;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
          text-transform: uppercase;
          text-align: center;

          ${mediaQuery.afterTablet}{
            color: #2d2e32;
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }

        p {
          color: #767676;
          font-size: 1.1rem;
          font-weight: 500;
          text-align: center;
          text-transform: none;

          ${mediaQuery.afterTablet}{
            color: #002147;
            font-size: 1rem;
            font-weight: lighter;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
