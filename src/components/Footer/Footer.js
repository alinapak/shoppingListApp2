import React from 'react';
import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import {FaPhoneSquareAlt} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlineGlobal} from "react-icons/ai";
import './Footer.css';

const styles = {
  icons: {
    fontSize: "1.5rem"
  }
}
const Footer = () => {
  const today = new Date();
  return (
    <>
      <div className="bg-light fixed-bottom">
        <div>
          <div className="d-flex justify-content-center p-1 ">
            <i className="px-3" style={styles.icons}><BsFacebook /></i>
            <i className="px-3" style={styles.icons}><BsTwitter /></i>
            <i className="px-3" style={styles.icons}><BsGithub /></i>
            <i className="px-3" style={styles.icons}><ImLinkedin /></i>
          </div>
          <div className="d-flex justify-content-end">
            <p className="px-3">Contact me:</p>
            <div className='d-grid'>
            <i className="p-1"><FaPhoneSquareAlt/> +37066666666</i>
            <i className="p-1"><HiOutlineMail/> alina.pakamoryte@gmail.com</i>
            <i className="p-1"><AiOutlineGlobal/> www.future-porfolio.com</i>
            </div>
          </div>
        </div>
        <p className="text-center">  © Copyright {today.getFullYear()}</p>
      </div>
    </>
  );
};

export default Footer;
