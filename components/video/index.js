import React, { Component } from 'react';
import classnames from 'classnames';
import s from './_index.css';

class Video extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.video) {
      if (nextProps.play) {
        if (this.video.paused) {
          this.video.play();
        }
      } else if (!this.video.paused) {
        this.video.pause();
      }
    }
  }

  componentDidMount() {
    if (this.video) {
      this.video.play();
    }
  }
  
  
  renderVideoBackground() {
    const { imageCSS, isMobile, fixedHeight, hide, loaded } = this.props;

    const styles = {};
    if (loaded && imageCSS) {
      styles.backgroundImage = `url(${imageCSS})`;
    }
    if (fixedHeight) {
      styles.height = `${fixedHeight}px`;
    }
    if (hide) {
      styles.opacity = 0;
    }

    const classes = classnames(s.videoBackground, { imageCSS });

    /* This is before video plays - should show the first frame */
    const fallback = isMobile ? <img className={s.video-mobile-fallback} src={imageCSS} /> : null;

    return (
      <div className={classes} style={styles}>
        {fallback}
        {this.renderVideo()}
      </div>
    );
  }

  renderImage() {
    if (!this.props.imageCSS) {
      const { sizes } = this.props;
      return (<Rimage sizes={sizes} />);
    }
  }

  renderVideo() {
    const { src, play, preload } = this.props;
    const preloadAttribute = preload || 'auto';

    let video;
    if (src && src.length) {
      video = (
        <video
          ref={ref => this.video = ref}
          src={src}
          onClick={e => e.preventDefault()}
          preload={preloadAttribute}
          playsInline loop muted
        />
      );
    } else {
      video = this.renderImage();
    }

    return video;
  }

  render() {
    return this.renderVideoBackground();
  }

}

export default Video;
