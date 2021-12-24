import { ListItem } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../data.js"

export default function Portfolio() {

    const [selected,setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "ML App",
        },
        {
            id: "web",
            title: "Design Team",
        },
        {
            id: "mobile",
            title: "Simulation",
        },
        {
            id: "design",
            title: "Hackathon",
        },
    ];

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio)
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item =>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}    
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="Code" />
                        <a href={d.url}>
                            <h3>{d.title}</h3>
                        </a>
                        
                    </div>
                ))}
            </div>   
            <a href="#contact" className="link">
                <img src="assets/down.png" alt="Down" className="downLink"/>
            </a>
        </div>
    )
}
