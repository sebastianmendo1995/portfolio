import React from "reactn";
import styled from "styled-components";
import profile from "../../assets/images/profile.png";
import logo from "../../assets/images/logo.png";
import { mediaQuery } from "../../styles/constants";

export const Home = (props) => {
  return (
    <HomeContainer>
      <div className="header">
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
      </div>

      <section className="about">
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
                  I'm a 1 year experience Software Engineer, currently working
                  at <span>eBombo</span>. I discovered my passion for coding
                  while I was developing automated systems for the company I
                  used to worked.
                </p>
                <p>
                  Since then, I've been sharpening my skills in Ruby, Rails,
                  Javascript, React, Redux, Express, Node.js, MongoDB, Postgres.
                  I welcome you to review my projects.
                </p>
                <a
                  className="btn w250"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="../assets/documents/resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  background: #273047;
  .header {
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
  }

  .about {
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
            }
          }
        }
      }
    }
  }

  .btn {
    background-image: linear-gradient(
      to right,
      #73d8c6 0%,
      #5ba4d7 50%,
      #5ba4d7 100%
    );
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    border-radius: 50px;
    display: block;
    color: #ffffff;
    font-size: 1.1rem !important;
    font-weight: 900 !important;
    font-family: "roboto";
    cursor: pointer;
    border: 0;
    outline: none;
  }

  .m30-auto {
    margin: 30px auto;
  }

  .w250 {
    width: 250px;
  }
`;
