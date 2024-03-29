import React, { useState } from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";
import emailjs from "emailjs-com";
import { message as AntMessage } from "antd";
import isEmpty from "lodash/isEmpty";

export const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendMail = async (e) => {
    if (isEmpty(name)) setErrorName(true);
    if (isEmpty(email)) setErrorEmail(true);
    if (isEmpty(message)) setErrorMessage(true);

    if (isEmpty(name) || isEmpty(email) || isEmpty(message))
      return AntMessage.error("Please fill in all fields");

    try {
      e.preventDefault();

      const response = await emailjs.sendForm(
        "service_nf8djgm",
        "template_shc2hlc",
        e.target,
        "user_xE94l09Hi0IZrtYNsDrtU"
      );

      if (response.status === 200) {
        AntMessage.success("Message send");

        setName("");
        setEmail("");
        setMessage("");
        setErrorName(false);
        setErrorEmail(false);
        setErrorMessage(false);
      }
    } catch (error) {
      console.log(error.text);
      message.error("Something went wrong, try again");
    }
  };

  return (
    <ContactSection id="contact">
      <div className="content">
        <h3>Contact</h3>
        <div className="row">
          <div className="col-4">
            <p>
              I’m interested in freelance opportunities – especially ambitious
              or large projects. However, if you have other request or question,
              don’t hesitate to use the form.
            </p>
          </div>
          <div className="col-9">
            <form onSubmit={sendMail} className="contact-form">
              <div className="inputs-container">
                <div className="name">
                  <input
                    className={`${errorName && "error"}`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="email">
                  <input
                    className={`${errorEmail && "error"}`}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="message">
                <textarea
                  className={`${errorMessage && "error"}`}
                  name="message"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => {
                    e.preventDefault();
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className="form-button">
                <button className="submit" htmltype="submit">
                  <span className="text">Send message!</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  width: 100%;
  padding: 3rem 0;

  ${mediaQuery.afterTablet}{
    max-width: 1500px;
    margin: 0 auto;
  }

  .hidden {
    opacity: 0;
    height: 0;
    width: 0;
    margin: 0;
    padding: 0;
  }

  .form-button {
    display: flex;
    justify-content: flex-end;
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

  .content {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;

    .row {
      display: block;

      ${mediaQuery.afterTablet} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .col-4 {
        flex: 0 0 100%;
        max-width: 100%;
        position: relative;

        p {
          font-size: 1rem;
          line-height: 1.6rem;
          color: #2b2b2b;
          font-weight: 400;
          position: relative;
          text-align: center;
        }

        ${mediaQuery.afterTablet} {
          flex: 0 0 31%;
          max-width: 31%;
        }
      }

      .col-9 {
        flex: 0 0 100%;
        max-width: 100%;
        position: relative;
        margin-top: 2rem;

        ${mediaQuery.afterTablet} {
          flex: 0 0 65%;
          max-width: 65%;
          margin-top: 0;
        }

        form {
          position: relative;

          .inputs-container {
            margin-bottom: 30px;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 30px;

            ${mediaQuery.afterTablet} {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .error {
            border-bottom: 2px solid red !important;
          }

          input[type="email"],
          input[type="text"],
          textarea {
            width: 100%;
            height: 50px;
            font-size: 16px;
            padding: 0 20px;
            box-sizing: border-box;
            display: block;
            outline: none;
            font-size: 1.1rem;
            font-weight: 400;
            resize: none;
            background: transparent;
            color: #2b2b2b;
            border-color: #002147;
            border-width: 2px;
            border-radius: 1rem;
          }

          textarea {
            padding: 20px;
            width: 100%;
            height: 50px;
            font-size: 16px;
            border-width: 2px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            min-height: 150px;
            height: 230px;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;
