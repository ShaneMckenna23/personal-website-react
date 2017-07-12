import React, { Component } from 'react';
import env from '../../adaptors/server/env';
import window from '../../adaptors/server/window';
import s from './_index.css';
import Video from '../video';

class HomeIntro extends Component {

  render() {
    const { loaded, isMobile, viewportDimensions } = this.props;

    let playVideo = loaded;
    let fallbackImage, src;

    if (viewportDimensions.width < 600) {
      src = 'https://player.vimeo.com/external/205373063.sd.mp4?s=eedf82905ed3ecba67b0f7ce3d2200309156ee36&profile_id=165';
    } else {
      src = 'https://player.vimeo.com/external/195475311.sd.mp4?s=fea332405de6ad2bea1d9082ea6b98184269111e&profile_id=165';
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
