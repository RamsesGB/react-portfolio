import React, { Component } from 'react';
import MenuItem from './MenuItem';


class Menu extends Component {
  constructor(props) {
    super();
    this.sections = {
      Section1: null,
      Section2: null,
      Section3: null
    }
    this.state = {
      activeMenuItem: {
        top = '',
        Section1 = '',
        Section2 = '',
        Section3 = ''
      }
    }
  }
  handleScroll() {
    const curPos = window.scrollY;
    let curSection = null;
    if(curPos > this.sections.Section3) {
      curSection = 'section3';
    } else if(curPos > this.sections.Section2) {
      curSection = 'section2';
    } else if(curPos > this.sections.Section1) {
      curSection = 'section1';
    } else {
      curSection = 'top';
    }
    
    if(this.state.activeMenuItem[curSection] !== "active") {            
      const newMenuState = {
        top: '',
        Section1: '',
        Section2: '',
        Section3: ''
      }
      newMenuState[curSection] = "active";
      this.setState({ activeMenuItem: newMenuState });
    }
  }
  getAnchorPoints() {
    const curScroll = window.scrollY;
    for(var key in this.sections) {     
      this.sections[key] = document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
    
    /* Get the pixel height of the viewport */
    
    const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    /* Get the pixel-depth of the bottom of the page */
    
    const bottom = document.body.offsetHeight;
    
    /* If max-scroll is less than the pixel-depth of Section 3, then adjust the pixel-depth of Section 3 to be 50px higher than max scroll depth ... allowing it to be an active destination */
    
    if(viewPortHeight > (bottom - this.sections.Section3)) {
      this.sections.Section3 = bottom - viewPortHeight - 50;
    }
    this.handleScroll();
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    
    /* When window resizes, get new scroll-depth positions of anchors */
    
    window.addEventListener('resize', this.getAnchorPoints.bind(this));
  }
  componentDidUpdate() {
    if(this.props.dataLoaded) {
      this.getAnchorPoints();
    }
  }
  render() {
    const menuItems = [];
    for(var key in this.sections) {
      menuItems.push(<MenuItem itemName={key} active={this.state.activeMenuItem[key]} />);
    }
    return (
      <Nav>
        <ul>
          {menuItems}
        </ul>
      </Nav>
    );
  }
}