/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner0 from './Banner0';
import Feature0 from './Feature0';
import Teams1 from './Teams1';
import Banner2 from './Banner2';
import Feature2 from './Feature2';
import Pricing0 from './Pricing0';
import Content13 from './Content13';
import Footer1 from './Footer1';

import {
  Banner00DataSource,
  Feature00DataSource,
  Banner01DataSource,
  Teams10DataSource,
  Banner21DataSource,
  Feature20DataSource,
  Pricing00DataSource,
  Content130DataSource,
  Footer10DataSource,
} from './data.source';
import './less/MainStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 自動調整螢幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature0
        id="Feature0_0"
        key="Feature0_0"
        dataSource={Feature00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_1"
        key="Banner0_1"
        dataSource={Banner01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams1
        id="Teams1_0"
        key="Teams1_0"
        dataSource={Teams10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner2
        id="Banner2_1"
        key="Banner2_1"
        dataSource={Banner21DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature2
        id="Feature2_0"
        key="Feature2_0"
        dataSource={Feature20DataSource}
        isMobile={this.state.isMobile}
      />,
      <Pricing0
        id="Pricing0_0"
        key="Pricing0_0"
        dataSource={Pricing00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
