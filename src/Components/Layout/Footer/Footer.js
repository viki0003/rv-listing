import React from "react";
import "./footer.css";
import { Link } from "react-router";
import FBIcon from "../../../Assets/Icons/FB";
import TwitterIcon from "../../../Assets/Icons/Twitter";
import InstaIcon from "../../../Assets/Icons/Insta";
import TikTokIcon from "../../../Assets/Icons/TikTok";
import SnapIcon from "../../../Assets/Icons/Snapshot";
import Android from "../../../Assets/Icons/Android";
import AppleIcon from "../../../Assets/Icons/Apple";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="ftr-ui">
          {/* <div className="ftr-social-icons mobile-view">
          <h5>Socials</h5>
          <div className="social-icons-list">
            <Link to="">
              <FBIcon />
            </Link>
            <Link to="">
              <TwitterIcon />
            </Link>
            <Link to="">
              <InstaIcon />
            </Link>
            <Link to="">
              <TikTokIcon />
            </Link>
            <Link to="">
              <SnapIcon />
            </Link>
          </div>
        </div>
        <div className="ftr-links">
          <div className="ftr-links-col">
            <h5>Company Info</h5>
            <ul className="ftr-list">
              <li className="ftr-list-item">
                <Link>About Laura’s Closet</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Social Responsibility</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Affiliate</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Fashion Blogger</Link>
              </li>
            </ul>
          </div>

          <div className="ftr-links-col">
            <h5>Help & Support</h5>
            <ul className="ftr-list">
              <li className="ftr-list-item">
                <Link>About Laura’s Closet</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Returns</Link>
              </li>
              <li className="ftr-list-item">
                <Link>How to Order</Link>
              </li>
              <li className="ftr-list-item">
                <Link>How to Track</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Size Chart</Link>
              </li>
            </ul>
          </div>

          <div className="ftr-links-col">
            <h5>customer care</h5>
            <ul className="ftr-list">
              <li className="ftr-list-item">
                <Link>Contact Us</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Payment</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Bonus Point</Link>
              </li>
              <li className="ftr-list-item">
                <Link>Notices</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="platform-list mobile-view">
          <h5>Platforms</h5>
          <div className="pl-icons">
            <span>
              <Android />
            </span>
            <span>
              <AppleIcon />
            </span>
          </div>
        </div>
        <div className="ftr-social-col desktop-view">
          <div className="ftr-social-pltfrm">
            <div className="ftr-social-icons">
              <h5>Socials</h5>
              <div className="social-icons-list">
                <Link to="">
                  <FBIcon />
                </Link>
                <Link to="">
                  <TwitterIcon />
                </Link>
                <Link to="">
                  <InstaIcon />
                </Link>
                <Link to="">
                  <TikTokIcon />
                </Link>
                <Link to="">
                  <SnapIcon />
                </Link>
              </div>
            </div>
            <div className="platform-list">
              <h5>Platforms</h5>
              <div className="pl-icons">
                <span>
                  <Android />
                </span>
                <span>
                  <AppleIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="ftr-newsletter desktop-view">
            <h5>SIGN UP for new arrivals</h5>
            <div className="newsletter-ui">
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">subcribe</button>
              </div>
              <p>
                By clicking the SUBSCRIBE button, you are agreeing to our{" "}
                <Link to=""> Privacy & Cookie Policy</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="ftr-newsletter mobile-view">
          <h5>SIGN UP for new arrivals</h5>
          <div className="newsletter-ui">
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">subscribe</button>
            </div>
            <p>
              By clicking the SUBSCRIBE button, you are agreeing to our{" "}
              <Link to=""> Privacy & Cookie Policy</Link>
            </p>
          </div>
        </div> */}
          <div className="ftr-cnt">
            <p>
              Facebook® is a registered trademark of Facebook, Inc.
              (“Facebook”). Instagram® is a registered trademark of Facebook
              (“Instagram”). Twitter® is a registered trademark of Twitter, Inc.
              (“Twitter”). Please be advised that Nationwide RV is not in any
              way affiliated with Facebook, Instagram or Twitter, and the Site
              Offerings are not endorsed, administered or sponsored by Facebook,
              Instagram or Twitter.
            </p>
            <p>
              {" "}
              A copyright notice is just what it sounds like: a written notice
              stating that a particular work is protected by copyright, and that
              you own that copyright. The purpose of such notice is to avoid a
              situation where an infringer takes your work, but then claims that
              he or she was completely unaware that it was protected.{" "}
            </p>
            <p>
              *1-4 days Guarantee: We must receive all the necessary documents
              to prepare all the legal documents to complete the transaction.
              Time starts upon receiving the documents. Banks are not open on
              Sundays & Holidays so exclude Sundays & Holidays.
            </p>
          </div>
        </div>
        <div className="ftr-privacy-links">
          <ul className="privacy-list">
            <li className="pl-item">
              <Link to="">Shop your RV</Link>
            </li>
            <li className="pl-item">
              <Link to="">Sell your RV</Link>
            </li>
            <li className="pl-item">
              <Link to="">Terms & Conditions</Link>
            </li>
            <li className="pl-item">
              <Link to="">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="ftr-social-icons">
          <div className="social-icons-list">
            <Link to="">
              <FBIcon />
            </Link>
            <Link to="">
              <TwitterIcon />
            </Link>
            <Link to="">
              <InstaIcon />
            </Link>
            <Link to="">
              <TikTokIcon />
            </Link>
            <Link to="">
              <SnapIcon />
            </Link>
          </div>
        </div>
      </footer>
      <div className="btm-ftr-cstm">
        <div className="copyright-text">© 2025 Nationwide RV </div>
      </div>
    </>
  );
};
export default Footer;
