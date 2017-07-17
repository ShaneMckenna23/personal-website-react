import React, { Component } from 'react';
import s from './_index.css';
import Video from '../video';

class HomeIntro extends Component {

  render() {
    const { loaded, isMobile, viewportDimensions } = this.props;

    let playVideo = loaded;
    let fallbackImage, src;

    if (viewportDimensions.width < 600) {
      src = 'https://s3.envato.com/h264-video-previews/d3d7e327-d9a9-458f-b8b0-640788ad0c3b/19933199.mp4';
    } else {
      src = 'https://s3.envato.com/h264-video-previews/d3d7e327-d9a9-458f-b8b0-640788ad0c3b/19933199.mp4';
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
