import React, { Component } from "react";
import '../css/navbar.css'


const Navbar = () => (
        
            <nav>
                <div className="nav-wrapper">
                <a id="catButton" className="waves-effect waves-light btn-large center">Start Cat Game</a>
                <a className="brand-logo center">Click a face to start!</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>Score: </li>
                        <li>Top Score: </li>
                    </ul>
                </div>
            </nav>
        
);
export default Navbar;