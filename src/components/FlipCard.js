import { Col, Row } from "antd";
import React from "react";
import "./FlipCard.css";

function FlipCard() {
  return (
    <div>
      <section className="section-flip-card" id="section-courses">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">our courses</h2>
        </div>
        <Row className="flip-card-container" justify="center">
          <Col xl={8} sm={24} md={12}>
            <div className="flip-card">
              <div className="flip-card__side flip-card__side--front">
                <div className="flip-card__picture flip-card__picture--1">
                  &nbsp;
                  {/*- KÍ TỰ RỖNG TRONG HTML */}
                </div>
                <h4 className="flip-card__heading">
                  <span className="flip-card__heading-span flip-card__heading-span--1">
                    Control <br />
                    your time
                  </span>
                </h4>
                <div className="flip-card__details">
                  <ul>
                    <li>3 hours</li>
                    <li>1000 students</li>
                    <li>5 star rated</li>
                  </ul>
                </div>
              </div>
              <div className="flip-card__side flip-card__side--back flip-card__side--back-1">
                <div className="flip-card__cta">
                  <div className="flip-card__price-box">
                    <p className="flip-card__price-only">Only</p>
                    <p className="flip-card__price-value">$16</p>
                    <a
                      href="/redirect?Id=t4QpedsZQSbEiPHWVWFQSQ%3d%3d"
                      className="btn btn--white"
                    >
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} sm={24} md={12}>
            <div className="flip-card">
              <div className="flip-card__side flip-card__side--front">
                <div className="flip-card__picture flip-card__picture--2">
                  &nbsp;
                </div>
                <h4 className="flip-card__heading">
                  <span className="flip-card__heading-span flip-card__heading-span--2">
                    make <br />
                    mindmap
                  </span>
                </h4>
                <div className="flip-card__details">
                  <ul>
                    <li>10 hours</li>
                    <li>5000 students</li>
                    <li>5 star rated</li>
                  </ul>
                </div>
              </div>
              <div className="flip-card__side flip-card__side--back flip-card__side--back-2">
                <div className="flip-card__cta">
                  <div className="flip-card__price-box">
                    <p className="flip-card__price-only">Only</p>
                    <p className="flip-card__price-value">$20</p>
                    <a
                      href="/redirect?Id=t4QpedsZQSbEiPHWVWFQSQ%3d%3d"
                      className="btn btn--white"
                    >
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} sm={24} md={12}>
            <div className="flip-card">
              <div className="flip-card__side flip-card__side--front">
                <div className="flip-card__picture flip-card__picture--3">
                  &nbsp;
                </div>
                <h4 className="flip-card__heading">
                  <span className="flip-card__heading-span flip-card__heading-span--2">
                    make
                    <br />
                    your target
                  </span>
                </h4>
                <div className="flip-card__details">
                  <ul>
                    <li>15 hours</li>
                    <li>5000 students</li>
                    <li>5 star rated</li>
                  </ul>
                </div>
              </div>
              <div className="flip-card__side flip-card__side--back flip-card__side--back-3">
                <div className="flip-card__cta">
                  <div className="flip-card__price-box">
                    <p className="flip-card__price-only">Only</p>
                    <p className="flip-card__price-value">$25</p>
                    <a
                      href="/redirect?Id=t4QpedsZQSbEiPHWVWFQSQ%3d%3d"
                      className="btn btn--white"
                    >
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="u-center-text">
          <a
            href="/redirect?Id=8PbzEa1t5qA%2fxnPzl6pMfg%3d%3d"
            className="btn btn--blue"
          >
            See all our courses
          </a>
        </div>
      </section>
    </div>
  );
}

export default FlipCard;
