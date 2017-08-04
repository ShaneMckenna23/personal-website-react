import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome' 

class SocialMediaBar extends Component {
    render () {
        return (
            <div style={{color:"white", position:"relative", zIndex:1}}>
                <FontAwesome name='spotify' size='3x' />
                <FontAwesome name='github' size='3x' />
                <FontAwesome name='instagram' size='3x' />
                <FontAwesome name='linkedin' size='3x' />
            </div>
        )
    }
}

export default SocialMediaBar