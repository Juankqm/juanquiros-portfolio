import React from "react";
import "./Footer.css";

import ScrollUp from './ScrollUp/ScrollUp';
import FooterWave from '../../assets/Footer/wave.svg';

export default function Footer() {
  return (
    <div >
        <ScrollUp />
        <div className="footer-container">
            <div className='footer-parent'>
                <img src= {FooterWave}
                alt='no internet connection'
                className="footer-img"></img>
            </div>

        </div>
    </div>
  );
}