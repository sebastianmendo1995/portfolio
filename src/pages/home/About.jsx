import React from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";
import resume from "../../assets/documents/resume.pdf";
import setup from "../../assets/images/setup/setup-dark.jpeg";

export const About = (props) => {

  const downloadResume = (e) => {
    e.preventDefault();

    const a = document.createElement('a')
    a.href = resume
    a.download = resume.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <SectionAbout className='about' id='about'>
      <div className="container">
        <div className="about-content">
          <CustomDiv className="img-side" src={setup}></CustomDiv>
          <div className="text-side">
            <h3>About me</h3>
            <p>
              With 3 years experiences as a Software Engineer, I possess an impressive arsenal of skills different technologies as JavaScript, React, Node.js, Rails, Firebase, Google Cloud, Tailwindcss, CSS, HTML. I've successful create responsive websites that were built with best practices and a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code, utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
            </p>
            <button className="submit" role="button" onClick={e => { downloadResume(e)}}>
              <span className="text">Download Resume</span>
            </button>
          </div>
        </div>
      </div>

    
    </SectionAbout>
  );
};

const SectionAbout = styled.section`
  padding: 8rem 0;
  background-color: #fff;

  ${mediaQuery.afterTablet}{
    padding: 15rem 0;
  }

  .container {
    margin: 0 auto;
    padding: 0 1.7rem;
    width: 100%;

    ${mediaQuery.afterTablet}{
      padding: 0 4rem;
    }
  }

     
  .about-content {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: center;
    gap: 2rem;
    
    ${mediaQuery.afterTablet}{
      text-align: justify;
      grid-template-columns: 1fr 1fr;
    }

    .text-side {
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
      }

      p {
        color: #767676;
        font-family: Mulish,sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.5;

        ${mediaQuery.afterTablet}{
          font-size: 1.5rem;
        }
      }
      
      .submit{
        margin: 0 auto;

        ${mediaQuery.afterTablet}{
          margin: 0;
        }
      }
    }
  }

  
`;

const CustomDiv = styled.div`
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: full;
  height: 300px;
  border-radius: 1.7rem;
`