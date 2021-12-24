import React from 'react'
import "./topbar.scss"
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">welcome.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <a href="/PortfolioWebsite/assets/Resume-Jordan-Schneider.pdf">
                            <span>Resume + Contact Info</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon" />
                        <a href="https://www.linkedin.com/in/jos99/">
                            <span>LinkedIn</span>
                        </a> 
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <a href="https://github.com/jordans6">
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>  
        </div>
    )
}
