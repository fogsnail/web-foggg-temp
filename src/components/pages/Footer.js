import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__subscription">
        <p className="subscription__heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="subscription__text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer__input"
            ></input>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
        <div className="footer__links">
          <div className="footer__link-wrapper">
            <div class="footer__link-items">
              <h2>About Us</h2>
              <Link to="/sign-up">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div class="footer__link-items">
              <h2>Contact Us</h2>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
          <div className="footer__link-wrapper">
            <div class="footer__link-items">
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div class="footer__link-items">
              <h2>Social Media</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer__logo">
              <Link to="/" className="social__logo">
                FOGGG
                <i style={{marginLeft:"8px"}} className="fab fa-affiliatetheme"></i>
              </Link>
            </div>
            <small class="website-rights">hoangtph © 2020</small>
            <div class="social__icons">
              <Link
                class="social__icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social__icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social__icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social__icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social__icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Footer;
