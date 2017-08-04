import React, { Component } from 'react';
import HeightPrinter from '../Height-Printer';
import s from './_index.css'
import SocialMediaBar from "../SocialMediaBar"


class HomeIntroLogo extends Component {
    render() {
        return (
            <div>
                <SocialMediaBar/>
                <div className={s.homeIntroLogo}>
                    <h1 style={{color : "white"}}>Shane Mckenna</h1>
                </div>
            </div>
        );
    }
}

export default HomeIntroLogo;