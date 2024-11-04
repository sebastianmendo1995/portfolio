import React from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";
import spacesImg from "../../assets/images/spaces.png";
import basketballImg from "../../assets/images/basketball.png";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
// import casinoImg from "../../assets/images/chimp-casino.png";
// import foodImg from "../../assets/images/food-app.png";
// import californiaImg from "../../assets/images/california.png";

const projects  = [
  {
    title: 'Spaces',
    description: 'Online platform that allows users to rent spaces. The website provides an interface for searching, comparing, and reserving places.',
    techs: ['React', 'Rails', 'MongoDB', 'PostgreSQL'],
    github: 'https://github.com/sebastianmendo1995/fullstack',
    demo: 'https://fullstack-peerspace.herokuapp.com/#/',
    cover: spacesImg
  },
  {
    title: 'Basketball Runner',
    description: 'With a focus on simplicity and focus on user experience while gaming. This project allows user to keep track of their high score and compare it to the highest scores of other players.',
    techs: ['Javascript', 'Webpack', 'Canvas'],
    github: 'https://github.com/sebastianmendo1995/Basketball-Runner',
    demo: 'https://sebastianmendo1995.github.io/Basketball-Runner/dist/',
    cover: basketballImg
  },
  // {
  //   title: 'Food Recipe',
  //   description: 'Integrated API to get all recipes for the different dishes.\n' +
  //       'Implement shopping car for ingredients.',
  //   techs: ['Vanilla Javascript', 'Webpack', 'Free food API'],
  //   github: 'https://github.com/sebastianmendo1995/food-app',
  //   demo: 'https://sebastianmendo1995.github.io/food-app/dist/',
  //   cover: foodImg
  // },
]

export const Portfolio = (props) => {
  return (
    <PortfolioSection id="projects">
      <div className="content">
        <h3>Portfolio</h3>
        <div className="projects-grid">
          {
            projects.map((project, idx) => (
                <div className={`pro pro__1 ${idx % 2 !== 0 ? 'reversed-proj' : ''}`} key={project.name}>
                  <div className="pro__img">
                    <a target="_blank" href="" rel="noreferrer">
                      <img src={project.cover} alt="website" />
                    </a>
                  </div>
                  <div className="pro__text">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="stack">
                      { project.techs.map((tech, index) => (<p key={index}>{tech}</p>)) }
                    </div>
                    {
                      project.github && project.demo ? (
                        <div className="links">
                          <a target="_blank" href={project.github} rel="noreferrer">
                            Code <GithubOutlined />
                          </a>
                          <a target="_blank" href={project.demo} rel="noreferrer">
                            Live Demo<LinkOutlined />
                          </a>
                        </div>
                      ) : (
                        <div className='links'>
                          <p>Private Repository</p>
                        </div>
                      )
                    }
                  </div>
                </div>
            ))
          }
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
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
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
          margin-top: 1rem;

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
