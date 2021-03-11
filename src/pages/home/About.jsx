import React from "reactn";
import styled from "styled-components";
import profile from "../../assets/images/profile.png";
import { mediaQuery } from "../../styles/constants";
import resume from "../../assets/documents/resume.pdf";

export const About = (props) => {
  return (
    <SectionAbout>
      <div className="content">
        <h4>About</h4>
        <h3>Who I am</h3>
        <div className="grid-container">
          <div className="left">
            <img className="profile-img" src={profile} alt="" />
          </div>
          <div className="right">
            <div className="description">
              <p>
                I'm a 1 year experience Software Engineer, currently working at{" "}
                <a href="https://ebombo.com" className="link" target="_blank">
                  eBombo
                </a>{" "}
                as a Full-stack Engineer. I come from an Engineering background,
                I discovered my passion for coding while I was developing
                automated systems for the company I used to worked.
              </p>
              <p>
                Since then, I've been sharpening my skills in Ruby, Rails,
                Javascript, React, Redux, Express, Node.js, MongoDB, Postgres. I
                welcome you to review my projects.
              </p>
              <a
                className="btn w250"
                target="_blank"
                rel="noopener noreferrer"
                href={resume}
              >
                Download Resume
              </a>
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
    h4 {
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: 400;
      color: #8b5fe7;
      position: relative;
      margin-bottom: 10px;
      margin-left: 40px;
    }
    h4::before {
      content: "";
      width: 30px;
      height: 2px;
      background-color: #8b5fe7;
      position: absolute;
      top: 50%;
      right: 100%;
      margin-right: 10px;
      margin-top: -1px;
    }
    h3 {
      font-size: 1.6rem;
      line-height: 1.8rem;
      font-weight: 900;
      color: #ffffff;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .grid-container {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1rem;
      align-items: center;
      ${mediaQuery.afterTablet} {
        grid-template-columns: 1fr 3fr;
        grid-gap: 0;
      }
      .left {
        display: flex;
        justify-content: center;
        img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
        }
      }
      .right {
        border-radius: 20px;
        background-color: #323c55;
        padding: 20px;
        .description {
          p {
            font-size: 1rem;
            line-height: 1.6rem;
            color: #ffffff;
            font-weight: 400;
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
      }
    }
  }
`;
