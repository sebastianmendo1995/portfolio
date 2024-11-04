import React from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";
import resume from "../../assets/documents/resume.pdf";
import setup from "../../assets/images/setup/hero_setup.jpg";

export const About = () => {

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
            <h3>About Me</h3>
            <p>
              I am a mid-level Software Engineer with a proven track record of creating responsive websites that adhere to best practices and provide a seamless user experience. I have experience in developing Chrome extensions and automating processes. I have led the architecture, design, and development of over 100 new features across various applications and have performed API integrations for payment services.
            </p>
            <button className="submit" onClick={e => { downloadResume(e) }}>
              <span className="text">Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </SectionAbout>
  );
};

const SectionAbout = styled.section`
  padding: 4rem 0;
  background-color: #fff;
  
  ${mediaQuery.afterTablet}{
    max-width: 1500px;
    padding: 8rem 0;
    margin: 0 auto;
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
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
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
          font-size: 1.3rem;
          text-align: left;
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
  width: 100%;
  height: 300px;
  border-radius: 1.7rem;
  max-width: 430px;
  margin: 0 auto;
  
  ${mediaQuery.afterTablet}{
    height: 400px;
    max-width: 750px;
  }
`