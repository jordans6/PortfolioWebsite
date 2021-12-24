import React from 'react'
import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainter">
                                    <img src="assets/mobile.png" alt="mobile" /> 
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat sapiente deleniti veritatis fuga pariatur voluptatum voluptates, odit blanditiis rerum nulla quaerat dolor aperiam natus veniam id facilis inventore tempore?</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
