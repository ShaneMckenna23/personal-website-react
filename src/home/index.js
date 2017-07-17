/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Video from '../../components/video';
import HomeIntro from '../../components/home-intro';
import HeightPrinter from '../../components/Height-Printer';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  constructor(props) {
      super(props);
      this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount(){
      this.updateDimensions();
  }
    
  updateDimensions() {
      let w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
          height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

          this.setState({width:width,height:height});
  }

  render() {
    return (
      <Layout>
        <HeightPrinter />
        <HomeIntro  viewportDimensions={{ height : this.state.height , width: this.state.width}}/>
      </Layout>
    );
  }

}

export default HomePage;
