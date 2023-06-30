import React from "reactn";
import styled from "styled-components";
import self from "../../assets/images/header.JPG";
import {mediaQuery} from "../../styles/constants";

export const Header = (props) => {
  return (
    <HomeSection id="home" className="home">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h3>Hello, It's me</h3>
              <h1>Sebastian Mendo</h1>
              <h3>and I'm a <span>Fullstack Developer</span></h3>
              <p>I'm a passionate developer based in Lima, Peru. 📍</p>
              <div className="flex items-center gap-4">
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
              <img src={self} alt="cover" />
            </div>
          </div>
          <div className="skills"><p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li><img src="/static/media/html.6e7b1b463015c056aeb9a624c8dc2876.svg" title="HTML5" alt="skill-icon" /></li>
                <li><img src="/static/media/css3.9cecabbf6ce67609c48bc4f280a11002.svg" title="CSS3" alt="skill-icon" /></li>
                <li><img src="/static/media/javascript.de4c2594613e34b15666206bbede7327.svg" title="Java Script" alt="skill-icon" /></li>
                <li><img src="/static/media/react.afac9c43724070bf6674f2692b7356a9.svg" title="React" alt="skill-icon" /></li>
                <li><img src="/static/media/tailwind.79614a5f61617ba49a0891494521226b.svg" title="Tailwind CSS" alt="skill-icon" /></li>
                <li><img src="/static/media/scss.67cd0525916c4cdea4eb3abd8ae11137.svg" title="SCSS" alt="skill-icon" /></li>
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
  height: 100vh;
  position: relative;
  width: 100%;

  .container {
    margin: 0 auto;
    max-width: 107rem;
    padding: 0 4rem;

    .content {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10rem;
      height: 65rem;
      justify-content: center;
      position: relative;

      .hero-main {
        align-items: center;
        display: flex;
        gap: 10rem;
        justify-content: center;
        position: relative;

        .hero-img {
          max-height: 45vh;
          width: 35vw;
          
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
      }

      .hero-text {
        display: flex;
        flex-direction: column;
        max-width: 50rem;
        position: relative;

        h3 {
          color: #002147;
          font-size: 2.2rem;
          font-weight: 700;
        }

        h1 {
          color: #002147;
          font-size: 3.6rem;
          font-weight: 700;
          line-height: 1.3;
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
          font-family: Mulish, sans-serif;
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.6;
        }

        span {
          cursor: pointer;
          display: flex;
          gap: 1.3rem;
          margin: 2.5rem 0;
        }

        a {
          width: 4rem;
          height: 4rem;
          background: transparent;
          font-size: 2rem;
          color: #007E91;
          margin: 3rem 1.5rem 3rem 0;
          
          :hover {
            color: #002147;
            box-shadow: 0 0 1rem #002147;
          }
        }

      }
    }
  }
`;
