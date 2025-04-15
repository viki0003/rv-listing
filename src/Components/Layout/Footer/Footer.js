import React from "react";
import "./footer.css";
import { Link } from "react-router";
import FBIcon from "../../../Assets/Icons/FB";
import TwitterIcon from "../../../Assets/Icons/Twitter";
import InstaIcon from "../../../Assets/Icons/Insta";
import TikTokIcon from "../../../Assets/Icons/TikTok";
import SnapIcon from "../../../Assets/Icons/Snapshot";
import { useElementSettings } from '../../../ApiContext/ElementSettingsContext';


const Footer = () => {
  const { settings, error } = useElementSettings();
  if (error) return <p>{error}</p>;

  return (
    <>
      <footer>
        <div className="ftr-ui">
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
        {settings?.show_social_icons   &&   <div className="ftr-social-icons">
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
        }
      
      </footer>
      <div className="btm-ftr-cstm">
        <div className="copyright-text">© 2025 Nationwide RV </div>
      </div>
    </>
  );
};
export default Footer;
