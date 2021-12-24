import React from 'react'
import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            backDelay: 1600,
            backSpeed: 60,
            showCursor: true,
            strings: ["Engineer", "Developer", "Student"]
        })    
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/code.jpg" alt="Person" />    
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jordan Schneider</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="Down" />
                </a>
            </div>
        </div>
    )
}
