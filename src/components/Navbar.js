import React, { Component } from "react";

const styles = {
    navwrapper: {
        rightmargin: "20px",
        leftmargin: "20px"
    }
};

const Navbar = () => (
        <div>
            <nav>
                <div className="nav-wrapper">
                <a id="catButton" className="waves-effect waves-light btn-large center">Cat Game</a>
                <a className="brand-logo center">Click a face to start!</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>Score: </li>
                        <li>Top Score: </li>
                    </ul>
                </div>
            </nav>
        </div>
);
export default Navbar;