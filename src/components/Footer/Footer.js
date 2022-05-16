import React from 'react';
import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";
import './Footer.css';

const styles = {
  icons: {
    fontSize: "1.5rem"
  },
  color:{
    color:"black"
  }
}
const RedirectPage = () => {
  React.useEffect(() => {
    window.location.replace('https://www.google.com')
  }, [])
}
const Footer = () => {
  const today = new Date();
  return (
    <><div className="d-flex flex-column min-vh-100">
      <div className="bg-light mt-auto" id="footer">
        <div>
          <div className="d-flex justify-content-center p-2 border-bottom">
            <a style={styles.color} href="https://facebook.com"><i className="px-3" style={styles.icons}><BsFacebook /></i></a>
            <a style={styles.color} href="https://twitter.com"><i className="px-3" style={styles.icons}><BsTwitter /></i></a>
            <a style={styles.color} href="https://github.com"><i className="px-3" style={styles.icons}><BsGithub /></i></a>
            <a style={styles.color} href="https://linkedin.com"><i className="px-3" style={styles.icons}><ImLinkedin /></i></a>
          </div>
          <div className="d-flex justify-content-end p-2">
            <p className="px-3">Contact me:</p>
            <div className='d-grid'>
              <i className="p-1"><FaPhoneSquareAlt /> +37066666666</i>
              <i className="p-1"><HiOutlineMail /> alina.pakamoryte@gmail.com</i>
              <i className="p-1"><AiOutlineGlobal /> www.future-porfolio.com</i>
            </div>
          </div>
        </div>
        <p className="text-center border-top">  © Copyright {today.getFullYear()}</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
