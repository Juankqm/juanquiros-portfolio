import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/scrollService";
export default function Footer() {
  return (
    <div >
        <ScrollUp />
        <div className="footer-container">
            <div className='footer-parent'>
                <img src= {FooterWave}
                alt='no internet connection'
                className="footer-img" />
            </div>
        </div>
    </div>
  );
}