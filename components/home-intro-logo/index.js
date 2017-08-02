import React, { Component } from 'react';
import HeightPrinter from '../Height-Printer';
import s from './_index.css'

class HomeIntroLogo extends Component {
    render() {
        return (
            <div className="col-sm-2">
                <div className={s.homeIntroLogo}>
                    <h1>Shane Mckenna :D</h1>
                    <HeightPrinter />
                </div>
            </div>
        );
    }
}

export default HomeIntroLogo;