import React, { Component } from 'react';
import HeightPrinter from '../Height-Printer';
import s from './_index.css'
import SocialMediaBar from "../SocialMediaBar"


class HomeIntroLogo extends Component {
    render() {
        return (
            <div style={{color:"white", position:"relative", zIndex:1}}>
                <SocialMediaBar/>
                <h1 style={{color : "white"}}>Shane Mckenna</h1>
            </div>
        );
    }
}

export default HomeIntroLogo;