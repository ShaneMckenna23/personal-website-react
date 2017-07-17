import React, { Component } from 'react';
import s from './_index.css';
import Video from '../video';

class HomeIntro extends Component {

  render() {
    const { loaded, isMobile, viewportDimensions } = this.props;

    let playVideo = loaded;
    let fallbackImage, src;

    if (viewportDimensions.width < 600) {
      src = 'http://player.h-cdn.org/static/mp4/tears_of_steel_1080p_MP4.mp4';
    } else {
      src = 'http://player.h-cdn.org/static/mp4/tears_of_steel_1080p_MP4.mp4';
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
      </div>
    );
  }
}

export default HomeIntro;
