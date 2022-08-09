import React from "reactn";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants";
import spacesImg from "../../assets/images/spaces.png";
import basketballImg from "../../assets/images/basketball.png";
import casinoImg from "../../assets/images/chimp-casino.png";
import foodImg from "../../assets/images/food-app.png";
import { PlusOutlined } from "@ant-design/icons";

export const Portfolio = (props) => {
  return (
    <PortfolioSection id="portfolio">
      <div className="content">
        <h3>Portfolio</h3>
        <div className="row">
          <div className="col-2 mbl">
            <div className="portfolio-item rounded">
              <div className="details">
                <h4 className="title">Spaces</h4>
                <a
                  href="https://fullstack-peerspace.herokuapp.com/#/"
                  target="_blank"
                  className="more-button"
                  rel="noreferrer"
                >
                  <PlusOutlined className="icon-plus" />
                </a>
              </div>
              <div className="thumb">
                <img src={spacesImg} alt="" />
                <div className="mask" />
              </div>
            </div>
          </div>
          <div className="col-2 mbl">
            <div className="portfolio-item rounded">
              <div className="details">
                <h4 className="title">Basketball Runner</h4>
                <a
                  href="https://sebastianmendo1995.github.io/Basketball-Runner/dist/"
                  target="_blank"
                  className="more-button"
                  rel="noreferrer"
                >
                  <PlusOutlined className="icon-plus" />
                </a>
              </div>
              <div className="thumb">
                <img src={basketballImg} alt="" />
                <div className="mask" />
              </div>
            </div>
          </div>
          <div className="col-2 mbl">
            <div className="portfolio-item rounded">
              <div className="details">
                <h4 className="title">Chimp Casino</h4>
                <a
                  href="http://chimp-casino.herokuapp.com/#/"
                  target="_blank"
                  className="more-button"
                  rel="noreferrer"
                >
                  <PlusOutlined className="icon-plus" />
                </a>
              </div>
              <div className="thumb">
                <img src={casinoImg} alt="" />
                <div className="mask" />
              </div>
            </div>
          </div>
          <div className="col-2 mbl">
            <div className="portfolio-item rounded">
              <div className="details">
                <h4 className="title">Food App</h4>
                <a
                  href="https://sebastianmendo1995.github.io/food-app/dist/"
                  target="_blank"
                  className="more-button"
                  rel="noreferrer"
                >
                  <PlusOutlined className="icon-plus" />
                </a>
              </div>
              <div className="thumb">
                <img src={foodImg} alt="" />
                <div className="mask" />
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
  margin-top: 100px;
  .content {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;

    .row {
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      .col-2 {
        flex: 0 0 100%;
        max-width: 100%;

        .portfolio-item {
          position: relative;
          overflow: hidden;
          .thumb {
            overflow: hidden;
            img {
              display: block;
              margin: 0 auto;
              max-width: 100%;
            }
            .mask {
              background-image: linear-gradient(
                to right,
                #73d8c6 0%,
                #5ba4d7 50%,
                #5ba4d7 100%
              );
              position: absolute;
              left: 0;
              top: 0;
              opacity: 0;
              height: 100%;
              width: 100%;
              transition: all 0.3s ease-in-out;
            }
          }
          .details {
            color: #fff;
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 1;
            h4 {
              color: #fff;
              font-weight: 900;
              text-transform: uppercase;
              font-size: 1.2rem;
              margin: 0 0 10px;
              padding: 0 20px;
              opacity: 0;
              transform: translateY(30px);
              transition: all cubic-bezier(0.075, 0.82, 0.165, 0.6) 1s;
              position: absolute;
              top: 60px;
            }
            .more-button {
              color: #fff;
              font-size: 1rem;
              display: block;
              background: #ffffff;
              height: 60px;
              line-height: 42px;
              text-align: center;
              position: absolute;
              bottom: 0;
              right: 0;
              width: 60px;
              transition: all 0.3s ease-in-out;
              opacity: 0;
              .icon-plus {
                font-size: 2.5rem;
                color: #73d8c6;
                top: 10px;
                left: 10px;
                position: absolute;
              }
            }
          }
        }
        .portfolio-item:hover {
          h4,
          .more-button {
            opacity: 1;
          }
          .mask {
            opacity: 0.95;
          }
        }
        .rounded {
          border-radius: 20px;
          background-color: #323c55;
        }
      }
      .mbl {
        margin-bottom: 2.6rem;
      }
      ${mediaQuery.afterTablet} {
        display: flex;
        .col-2 {
          flex: 0 0 48%;
          max-width: 48%;
          position: relative;
        }
      }
    }
  }
`;
