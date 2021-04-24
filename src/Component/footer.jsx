import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer p-5">
      <div className="container d-flex flex-wrap justify-content-between">
        <p className="m-auto text-center">@ImranMandal{year}</p>
        <div className="d-flex m-auto">
            
          <a className="socials rounded-circle" href="https://www.facebook.com/imran.mandal.7549/">
            <FaFacebookF className="fb" />
          </a>
          <a className="socials rounded-circle" href="https://www.instagram.com/imranmandal1999/">
            <FaInstagram className="insta" />
          </a>
          <a className="socials rounded-circle" href="https://twitter.com/ImranMandal8">
            <FaTwitter className="twt" />
          </a>  
      </div>
        
        </div>
      </div>
    </>
  );
};

export default Footer;
