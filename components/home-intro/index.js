import React, { Component } from 'react';
import s from './_index.css';
import Video from '../video';
import HomeIntroLogo from '../home-intro-logo'
import {Col} from 'react-bootstrap'

class HomeIntro extends Component {

  render() {
    const { loaded, isMobile, viewportDimensions } = this.props;

    let playVideo = loaded;
    let fallbackImage, src;

    if (viewportDimensions.width < 600) {
      src = 'https://storage.googleapis.com/personal-website-react.appspot.com/VID_20170714_223201_1.mp4';
    } else {
      src = 'https://storage.googleapis.com/personal-website-react.appspot.com/Longitude2017_720.mp4';
    }     
    
    return (
      <div className={s.homeIntro}>
        <div className={s.homeIntroVideo}>
          <Video
            src={src}
            isVideoBackground={true}
            play={loaded}
            imageCSS={fallbackImage}
            heroVideo={true}
            isMobile={isMobile}
            preload="auto"
            fixedHeight={viewportDimensions.height}
          />
        </div>
        <HomeIntroLogo />
      </div>
    );
  }
}

export default HomeIntro;
