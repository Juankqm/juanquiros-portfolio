import React from 'react';
import './ScrollUp.css';
import ScrollService from "../../../utilities/scrollService";

const ScrollUp = () => {
    return(
        <div className="scroll-container">
            <button
                className="btn-scroll"
                onClick={() => ScrollService.scrollHandler.scrollToHome()}
            >
                {" "}
                <i className="fa fa-arrow-up"></i>
            </button>
        </div>
    );
}

export default ScrollUp;