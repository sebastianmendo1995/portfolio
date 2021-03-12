import React from "reactn";
import styled from "styled-components";
import profile from "../../assets/images/profile.png";
import world from "../../assets/images/world.png";
import { mediaQuery } from "../../styles/constants";
import { object, string } from "yup";
import { useForm } from "react-hook-form";

export const Contact = (props) => {
  const schema = object().shape({
    name: string().required(),
    email: string().required(),
    message: string().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
    reValidateMode: "onSubmit",
  });

  const sendMail = async (data) => {

  }

  return (
    <ContactSection id="contact">
      <div className="content">
        <h4>Where to find me</h4>
        <h3>Contact</h3>
        <div className="row">
          <div className="col-4 info">
            <p>
              Do you have questions or a project?
              <br />
              Please use the form below to contact me.
            </p>
          </div>
          <div className="col-9">
            <form onSubmit={handleSubmit(sendMail)}>
              <div className="inputs-container">
                <div className="name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={register}
                    error={errors.name}
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={register}
                    error={errors.email}
                  />
                </div>
              </div>
              <div className="message">
                <textarea
                  name="message"
                  placeholder="Message"
                  ref={register}
                  error={errors.message}
                />
              </div>
              <button className="btn" htmlType="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  width: 100%;
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
          color: #ffffff;
          font-weight: 400;
        }
        ${mediaQuery.afterTablet} {
          flex: 0 0 31%;
          max-width: 31%;
        }
      }
      .info {
        background: none;
        margin-bottom: 30px;
        ${mediaQuery.afterTablet} {
          background-image: url(${`${world}`});
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
      .col-9 {
        flex: 0 0 100%;
        max-width: 100%;
        position: relative;
        ${mediaQuery.afterTablet} {
          flex: 0 0 65%;
          max-width: 65%;
        }
        form {
          .inputs-container {
            margin-bottom: 30px;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 30px;
            ${mediaQuery.afterTablet} {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          input,
          textarea {
            background: #323c55;
            border: 2px solid #323c55;
            color: #ffffff;
            border-radius: 10px;
            height: 60px;
            padding: 0 20px;
            width: 100%;
            box-sizing: border-box;
            display: block;
            outline: none;
            font-size: 1rem;
            font-weight: 400;
            resize: none;
            font-family: Arial, Helvetica, sans-serif;
          }
          textarea {
            border-radius: 10px;
            height: 230px;
            padding: 20px;
          }
          .btn {
            width: 200px;
            margin-top: 20px;
          }
        }
      }
    }
  }
`;
