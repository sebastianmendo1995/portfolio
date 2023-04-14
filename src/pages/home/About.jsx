import React from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";
import resume from "../../assets/documents/resume.pdf";

export const About = (props) => {
  return (
    <SectionAbout>
      <div className="content">
        <h3>Who I am</h3>
        <div className="grid-container">
          <div className="left">
            <div className="description">
              <p>
                I'm a 3 year experience Fullstack Software Engineer. I create
                successful responsive websites that are easy to use, and built
                with best practices. The main area of my expertise is front-end
                development, HTML, CSS, JS, React.js, Next.js, Tailwind, building small
                and medium web apps, custom plugins, features and animations.
              </p>
            </div>
            <a
              className="flat-button"
              target="_blank"
              rel="noopener noreferrer"
              href={resume}
            >
              <div>
                <span class="bg"></span> 
                <span class="base"></span>
                <span class="text">Download Resume!</span>
              </div>
            </a>
          </div>
          <div className="right">
            <div className="chart">
              <span>Front-end</span>
              <footer>
                <div className="frontend"></div>
              </footer>
            </div>
            <div className="chart">
              <span>Back-end</span>
              <footer>
                <div className="backend"></div>
              </footer>
            </div>
            <div className="chart">
              <span>ReactJS</span>
              <footer>
                <div className="react"></div>
              </footer>
            </div>
            <div className="chart">
              <span>NextJs</span>
              <footer>
                <div className="next"></div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </SectionAbout>
  );
};

const SectionAbout = styled.section`
  margin-top: 100px;
  .content {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;

    .grid-container {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1rem;
      align-items: center;
      ${mediaQuery.afterTablet} {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
      }
      .left {
        p {
          position: relative;
          font-size: 1rem;
          line-height: 1.6rem;
          color: #ffffff;
          font-weight: 400;
          margin-bottom: 3rem;

          .link {
            text-decoration: none;
            line-height: 1;
            position: relative;
            z-index: 0;
            display: inline-block;
            padding: 5px 5px;
            overflow: hidden;
            color: #73d8c6;
            vertical-align: bottom;
            transition: color 0.3s ease-out;
            cursor: pointer;
          }
        }
      }
      .right {
        .chart {
          margin-bottom: 2rem;

          span {
            font-size: 18px;
            font-family: "Anton";
            margin-bottom: 7px;
            display: block;
            color: #fff;
          }

          footer {
            background-color: #373737;
            height: 2px;

            .frontend {
              width: 95%;
              height: 100%;
              background-color: #08fdd8;
              -webkit-transition: width 1.3s ease-out;
              -o-transition: width 1.3s ease-out;
              transition: width 1.3s ease-out;
            }

            .backend {
              background: rgb(255, 34, 83);
              width: 75%;
              height: 100%;
              -webkit-transition: width 1.3s ease-out;
              -o-transition: width 1.3s ease-out;
              transition: width 1.3s ease-out;
            }

            .react {
              background: rgb(210, 108, 213);
              width: 90%;
              height: 100%;
              -webkit-transition: width 1.3s ease-out;
              -o-transition: width 1.3s ease-out;
              transition: width 1.3s ease-out;
            }

            .next {
              background: #08fdd8;
              width: 80%;
              height: 100%;
              -webkit-transition: width 1.3s ease-out;
              -o-transition: width 1.3s ease-out;
              transition: width 1.3s ease-out;
            }
          }
        }
      }
    }
  }
`;
