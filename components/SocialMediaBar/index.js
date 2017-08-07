import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome' 
import s from './_index.css'

class SocialMediaBar extends Component {

    openTab(url){
        window.open(url)
    }

    render () {
        return (
            <div>
                <FontAwesome className={s.socialIcons} name='spotify' size='3x' onClick={()=>this.openTab("https://open.spotify.com/user/nuclarpenguin")} />
                <FontAwesome className={s.socialIcons} name='github' size='3x' onClick={()=>this.openTab("https://github.com/ShaneMckenna23")} />
                <FontAwesome className={s.socialIcons} name='instagram' size='3x' onClick={()=>this.openTab("https://www.instagram.com/shanemckenna23/")} />
                <FontAwesome className={s.socialIcons} name='linkedin' size='3x' onClick={()=>this.openTab("https://www.linkedin.com/in/shanemckenna23")} />
            </div>
        )
    }
}

export default SocialMediaBar